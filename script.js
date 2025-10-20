const textBox = document.querySelector('.textBox');
let todoCode;
let finalCode = '';
textBox.addEventListener('keydown', (event)=> {
  if(event.key == 'Enter' && textBox.value.trim() !== '') {
    todoCode = `<div class='todo'>${textBox.value}<button class="clearButton" onclick='removeTODO(this);'>remove</button></div>`;
    finalCode = finalCode + ' ' + todoCode;
    textBox.value = '';
  }
  
  document.querySelector('.todoList').innerHTML = finalCode;
  
})

const removeTODO = (buttonElement) => {

    const todoItem = buttonElement.parentElement;

    todoItem.remove();
  }