'use strict';

const list = document.querySelector('.list');
const listItems = document.querySelector('.list__items');
const bin = document.querySelectorAll('.bin');
const input = document.querySelector('#input');
const inputLine = document.querySelector('#input__line');
let item = document.querySelector('.item');
const button = document.querySelector('.input__button');


// Add items 
function updateValue(e) { 
  e.preventDefault();
  item = input.value;
  const addItem = document.createElement('div');
  addItem.setAttribute('class', 'list__items');
  addItem.innerHTML =  `
    <h5 class="item">${item}</h5>
    <i class="fas fa-trash-alt bin"></i>
  `;
  list.appendChild(addItem);
};

inputLine.addEventListener('submit', updateValue);

button.addEventListener('click', updateValue );

// Remove items 
document.addEventListener('click', (e) => {
  const choosenItem = e.target.parentNode;
  if(e.target.classList.contains('bin')) {
    list.removeChild(choosenItem);
  }
});