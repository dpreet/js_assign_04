const ls = localStorage;
const btn = document.getElementById('addTodo');

// ls.clear();


function get_list(){

			let arr = new Array() ;
			arr = ls.getItem('key');
			if(arr!=null){

				arr= JSON.parse(arr);
			}
			return arr ;
}

function addToStorage(addItem){

			 let arr = get_list() || [];
			 arr.push(addItem);
			 arr.push('unmark') ;
			 ls.setItem('key' , JSON.stringify(arr));
			  display();
            
}


btn.addEventListener('click', (add) => { 
  add.preventDefault();
  // const newList = document.createElement('li');
  document.getElementById('addTodoItem').innerHTML = '';
  let addItem = document.getElementById('addTodoItem').value;
   addToStorage(addItem);

  

});
 
 function display(){

 				let arr = new Array();
 				 arr = get_list() || [] ;
 				const list = document.getElementById('todoList');
 				list.innerHTML = '';
 				for ( let i = 0 ; i < arr.length ; i=i+2 ){

 					const newList = document.createElement('li');
 					newList.textContent = arr[i];
 					newList.className = arr[i+1];
 					let delBtn = document.createElement('button');
  					delBtn.textContent = 'delete';

  					list.appendChild(newList);
  					newList.appendChild(delBtn);

                    delBtn.addEventListener('click' , (removeFromStorage));
                    newList.addEventListener('click' , (mark));

            	}
					
 				}

 

 function removeFromStorage(){


 	let id = this.getAttribute('id');
    let todos = get_list();
    todos.splice(id, 2);
    ls.setItem('key', JSON.stringify(todos));
 
    display();  
 }
 
 function mark(){


 	if (this.className === 'unmark' ){

 		this.className = 'mark';
 		let id = this.getAttribute('id');
 		let todos = get_list();
 		todos[id+1] = 'mark';
        ls.setItem('key', JSON.stringify(todos));


 	}

 	else{

 		this.className = 'unmark' ;
 		let id = this.getAttribute('id');
 		let todos = get_list();
 		todos[id+1] = 'unmark';
        ls.setItem('key', JSON.stringify(todos));
 	}
 					


}

 display();


