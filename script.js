const textBox = document.querySelector('.textBox');
let todoCode;
let finalCode = '';
textBox.addEventListener('keydown', (event)=> {
  if(event.key == 'Enter') {
    todoCode = `<div>${textBox.value}<button class="clearButton">remove</button></div>`;
    finalCode = finalCode + ' ' + todoCode;
    textBox.value = '';
  }
  console.log(finalCode);
  document.querySelector('.todoList').innerHTML = finalCode;
})

