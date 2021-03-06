const lightButton = document.querySelector(".light_theme")
const newNoteButton = document.querySelector(".new_note")
const noteDiv = document.querySelector(".note")
const cancelButton = document.querySelector(".cancel")
const saveButton = document.querySelector(".save")
const textarea = document.querySelector(".main-text")
const noteList = document.querySelector(".note_list")

let isLight = false
let notesArray = [{ title:"note one", body:"some text" }, 
                  { title: "note two", body:"some text" }]

function addError() {
    const error = document.querySelector(".note_error")
    error.classList.remove("note_exists")
}

function removeError() {
    const error = document.querySelector(".note_error")
    error.classList.add("note_exists")
}

function checkTitle(newTitle) {
    for (let note of notesArray) {
        if (note.title == newTitle) {
            return true
        } 
    }
}

function createNoteBtn(title) {
    const newLiEl = document.createElement("li")
    const newLiBtn = document.createElement("button")
    newLiBtn.classList.add("btn")
    if (isLight) {
        newLiBtn.classList.add("light-btn")
    }
    newLiBtn.innerHTML = title
    newLiEl.appendChild(newLiBtn)
    
    const notesUl = document.querySelector(".note_list")
    notesUl.appendChild(newLiEl)
}

function showNote(noteTitle) {
    console.log('showNote ran')
    for (note of notesArray) {
        if (note.title == noteTitle) {
            textarea.value = `${note.title}\n`
            textarea.value += note.body
        } else {
        }
    }
}

cancelButton.addEventListener("click", () => {
    noteDiv.classList.add("hide_note")
    removeError()
})

newNoteButton.addEventListener("click", () => {
    if (noteDiv.classList.contains("hide_note")) {
        noteDiv.classList.remove("hide_note")
    } else {
        textarea.value = ''
    }
    removeError()
})

noteList.addEventListener("click", e => {
    const title = (e.target.innerHTML).toLowerCase()
    showNote(title)
    if (noteDiv.classList.contains("hide_note")) {
        noteDiv.classList.remove("hide_note")
    }
})

saveButton.addEventListener("click", () => {
    if (textarea.value !== '') {
        let lines = textarea.value.split("\n")
        /* Checks to see if note title already exists*/
        if (checkTitle(lines[0].toLowerCase()) === true) {
            addError()
            return null
        }
        removeError()

        let note = {}
        createNoteBtn(lines[0])
        note.title = lines[0].toLowerCase()
        note.body = ''
        for (let i = 1; i < lines.length; i++) {
            note.body += `${lines[i]}\n`
        }
        notesArray.push(note)
    console.log(notesArray)
    }
})

lightButton.addEventListener("click", () => {
    const body = document.querySelector(".body-base")
    const header = document.querySelector(".header")
    const sidebar = document.querySelector(".sidebar")
    const main = document.querySelector(".main")
    const textarea = document.querySelector(".main-text")
    const footer = document.querySelector(".footer")
    const buttons = document.querySelectorAll(".btn")

    body.classList.toggle("body-light")
    header.classList.toggle("headerfooter-light")
    footer.classList.toggle("headerfooter-light")
    sidebar.classList.toggle("mainside-light")
    main.classList.toggle("mainside-light")
    textarea.classList.toggle("light-text")
    
    for (btn of buttons) {
        btn.classList.toggle("light-btn")
    }

    if (lightButton.innerHTML == 'Light Theme') {
        lightButton.innerHTML = 'Dark Theme'
    } else {
        lightButton.innerHTML = 'Light Theme'
    }

    if (isLight) {
        isLight = false
    } else if (isLight === false) {
        isLight = true
    }
    console.log("light button clicked")
})