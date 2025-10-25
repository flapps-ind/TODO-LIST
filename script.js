const input = document.querySelector('.textBox');
const output = document.querySelector('.todoList');
let todoArray = [];
let tempArray = [];
const todoKey = 'myTodoList';
let finalCode = '';

const storedData = localStorage.getItem(todoKey); // stores localstorage in var


if (storedData !== null) { //checks if it is empty
  todoArray = JSON.parse(storedData); //updates my array
}
else {
  todoArray = []; //if empty creates a new array
  localStorage.setItem(todoKey, JSON.stringify(todoArray));
  
}

//Initial render of existing To-Dos
output.innerHTML = itemHtml(todoArray); 

input.addEventListener('keydown', (event) => {
  if(event.key == 'Enter' && input.value.trim() !== '') {
    todoArray.push(input.value); //pushes todos in the array
    input.value = '';
    localize(todoArray);
    
    output.innerHTML = itemHtml(todoArray);
    if(todoArray === '') {
    clearStorage();
    }
    

  }

})

function localize (tempArray) { //this updates the localStorage
  localStorage.setItem(todoKey, JSON.stringify(tempArray));
}

function itemHtml(todoArray) {
  let htmlCode = '';
  todoArray.forEach((item,index) => {
  htmlCode += `<div class='todo' data-index='${index}'>${item}<button class="clearButton" onclick='removeTODO(this);'>X</button></div>`
    
  });
  
  return htmlCode;
  
}

function removeTODO (buttonElement) {
  const todoItem = buttonElement.parentElement; //stores the entire <div>
  
  const indexToRemove = parseInt(todoItem.getAttribute('data-index')); //converts str to int

  todoArray.splice(indexToRemove, 1);

  localize(todoArray);

  output.innerHTML = itemHtml(todoArray);

  

}


// not using this, just for test-cases
function clearStorage () {
  localStorage.clear();
  todoArray = [];
  output.innerHTML = '';
}