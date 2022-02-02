/* Typing animation*/

const typeTextSpan = document.querySelector(".typed-text");
const typeJobTitleSpan = document.querySelector(".typing-job-title");

const fullName = 'Dimitrinka Tsoneva.';
const jobTitle = 'I\'m a Software Developer based in Bulgaria.';
const typingDelay = 100;
const nextTextDelay = 1000;
let charIndex = 0;
let charIndexTitle = 0;

function typeFullName(){
    if(charIndex < fullName.length){
        typeTextSpan.textContent += fullName.charAt(charIndex);
        charIndex++;
        setTimeout(typeFullName, typingDelay);
    }
}

function typeJobTitle(){
    if(charIndexTitle < jobTitle.length){
        typeJobTitleSpan.textContent += jobTitle.charAt(charIndexTitle);
        charIndexTitle++;
        setTimeout(typeJobTitle, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(typeFullName, nextTextDelay);
    setTimeout(typeJobTitle, nextTextDelay + 3000);
});
