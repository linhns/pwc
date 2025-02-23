import './style.css'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
//

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const generateBtn = document.getElementById("generate-btn")
const passwordsDiv = document.getElementById("passwords-div")
const passwordCountInput = document.getElementById("password-count")

generateBtn.addEventListener("click", () => {
    passwordsDiv.innerHTML = ""
    let passwordCount = +passwordCountInput.value
    const passwords = Array.from({ length: passwordCount }, () => generatePassword(characters, 15))
    for (const password of passwords) {
        const passwordDiv = document.createElement("div")
        passwordDiv.classList.add("password")
        passwordDiv.classList.add("flex")
        passwordDiv.textContent = password
        passwordsDiv.appendChild(passwordDiv)
    }
})

passwordCountInput.addEventListener("input", () => {
    let value = +passwordCountInput.value
    if (isNaN(value) || value < 1) {
        passwordCountInput.value = 1
    } else if (value > 9) {
        passwordCountInput.value = 9
    }
})

function randomInt(begin, end) {
    return Math.floor(Math.random() * (end - begin)) + begin;
}

function generatePassword(chars, length) {
    let password = ""
    for (let i = 0; i < length; i++) {
        password += chars[randomInt(0, chars.length)]
    }
    return password
}


