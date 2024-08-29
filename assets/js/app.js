"use strict"

const input = document.querySelector('#email')
let over = document.querySelector('.overr');

function isValidEmail(email){
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

let btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    const inputValue = input.value.trim();
    if(isValidEmail(inputValue)){
alert('logged in seccessfully')
over.classList.add('none')
    }else{
over.classList.remove('none')
    }

})
