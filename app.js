const body = document.querySelector(".body-base")
const header = document.querySelector(".header")
const sidebar = document.querySelector(".sidebar")
const main = document.querySelector(".main")
const textarea = document.querySelector(".main-text")
const footer = document.querySelector(".footer")
const lightButton = document.querySelector(".light_theme")
const buttons = document.querySelectorAll(".btn")

lightButton.addEventListener("click", () => {
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