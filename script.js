const textBox = document.querySelector('.textBox');
const todoList = document.querySelector('.todoList');
let todoCount = 0;
let removeCount = 0;

let finalCode = '';
textBox.addEventListener('keydown', (event)=> {
  if(event.key == 'Enter' && textBox.value.trim() !== '') {
    const newItemHTML = `<div class='todo'>${textBox.value}<button class="clearButton" onclick='removeTODO(this);'>remove</button></div>`;
    
    finalCode = finalCode + ' ' + newItemHTML;
    todoList.innerHTML = finalCode;
    textBox.value = '';
    todoCount++;

    
  }
 
});

const removeTODO = (buttonElement) => {

    const todoItem = buttonElement.parentElement;
    todoItem.remove();

    removeCount++;
    if(todoCount === removeCount) {
      finalCode = '';
      console.log('work');
      todoCount = 0;
      removeCount = 0;
    }
  }