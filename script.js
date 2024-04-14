const btn = document.querySelector(".btn");
const display = document.querySelector(".input_box");
const copy = document.querySelector(".copy");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0987654321";
const symbol = "@#$%^&*()_-+={}[]|<>/~"

const allchar = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
    password += allchar[Math.floor(Math.random() * allchar.length)];

    }
    display.value = password;
}

btn.addEventListener("click" ,() => {
    createPassword();
})
copy.addEventListener('click',() => {
    display.select();
    document.execCommand("copy")
})