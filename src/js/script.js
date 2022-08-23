'use strict ';

const box = document.getElementById ('box');
const box = document.getElementById ('box');
const btns = document.getElementsByTagName ('button');
const circles = document.getElementsByClassName ('circle');
const hearts = document.querySelectorAll ('.heart');
const oneHeart = document.querySelector ('.heart');
const wrapper = document.querySelector ('.wrapper');
    box.style.background ='blue';
    box.style.width = '500px';
    btns[2].style.background = 'green';
    circles[2].style.backgroundColor = 'black';


      
for ( let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = 'green';
}
const div = document.createElement ('div');
const text = document.createTextNode ('alo??!');
    div.classList.add('black');
    /* document.body.append(div); */
    document.querySelector('.box').append(div);
   /*  wrapper.prepend (div); Добавление внуть в конце

       wrapper.apppend  (div); добавление внутрь в начале  */ 
    hearts[1].before(div); /*  добавление перед  */
    hearts[1].after(div);  /*  добавление после  */

div.innerHTML = '<h1> Zdarova ebat </h1>'; 
div.insertAdjacentElement("beforebegin", '<h2> hello </h2>');