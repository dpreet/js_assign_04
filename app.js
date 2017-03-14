
const btn = document.getElementById('addTodo');
btn.addEventListener('click', (event) => {

  event.preventDefault();
  const addItem = document.getElementById('addTodoItem').value;
  const newList = document.createElement('li');
  newList.textContent=addItem;
  document.getElementById('todoList').appendChild(newList);
  
  var delBtn = document.createElement('button');
  delBtn.textContent = 'delete';
  newList.appendChild(delBtn);

delBtn.addEventListener('click' , (event) => {

            event.preventDefault();
            
            newList.remove();

});

var click = 0;
newList.addEventListener('click', (event) => {

event.preventDefault();

if(click%2==0){
newList.className = "strike";

}

else{

newList.className = "strike2";

}

click++;



});



}); 


		


