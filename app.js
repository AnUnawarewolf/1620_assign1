const lightButton = document.querySelector(".light_theme")
const newNoteButton = document.querySelector(".new_note")
const noteDiv = document.querySelector(".note")
const cancelButton = document.querySelector(".cancel")
const saveButton = document.querySelector(".save")
const textarea = document.querySelector(".main-text")

let notesArray = [{ title:"note one", body:"some text" }, 
                  { title: "note two", body:"some text" }]

saveButton.addEventListener("click", () => {
    if (textarea.value !== '') {
        let lines = textarea.value.split("\n")
        note = {}
        note.title = lines[0]

        start = 1
        note.body = ''
        for (let i = 0; i < lines.length; i++) {
            note.body += `${lines[start]}\n`
            start++
        }
        notesArray.push(note)
    console.log(notesArray)
    }
})

cancelButton.addEventListener("click", () => {
    noteDiv.classList.add("hide_note")
    console.log("cancel button clicked")
})

newNoteButton.addEventListener("click", () => {
    if (noteDiv.classList.contains("hide_note")) {
        noteDiv.classList.remove("hide_note")
    } else {
        textarea.value = ''
    }
    console.log("new note button clicked")
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
    console.log("light button clicked")
})