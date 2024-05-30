const lefttext=document.querySelector('.left');
const righttext=document.querySelector('.right');
const leftimage=document.getElementById('leftimage');
const rightimage=document.getElementById('rightimage');
const frontimage=document.getElementById('frontimage');
function leftEnter(){
    leftimage.classList.remove('hidden');
    leftimage.classList.add('visible');
    frontimage.classList.remove('visible');
    frontimage.classList.add('hidden');
}
function leftLeave(){
    leftimage.classList.remove('visible');
    leftimage.classList.add('hidden');
    frontimage.classList.remove('hidden');
    frontimage.classList.add('visible');
}
function rightEnter(){
    rightimage.classList.remove('hidden');
    rightimage.classList.add('visible');
    frontimage.classList.remove('visible');
    frontimage.classList.add('hidden');
}
function rightLeave(){
    rightimage.classList.remove('visible');
    rightimage.classList.add('hidden');
    frontimage.classList.remove('hidden');
    frontimage.classList.add('visible');
}
lefttext.addEventListener('mouseover',leftEnter);
lefttext.addEventListener('mouseout',leftLeave);
righttext.addEventListener('mouseenter',rightEnter);
righttext.addEventListener('mouseleave',rightLeave);

const summary=document.getElementById('summary');
function alertBtn(){
alert("Projects in process");
}
summary.addEventListener("click",alertBtn);