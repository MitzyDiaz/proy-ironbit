//SELECTORES
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const todoRBtn = document.querySelector('.todo-remove-btn');
const mensaje = document.querySelector('.mensaje');
const todoContainer = document.querySelector('.todo-container');

//EVENTOS
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
todoRBtn.addEventListener('click', deleteAll);


if(todoList.childElementCount < 1){
	mensaje.style.color="blue";
}


//FUNCIONES
function addTodo(event) {
    //no submit
    event.preventDefault();
    mensaje.style.display="none";
    todoContainer.style.borderRadius="0px 0px 6px 6px";
    //CREAR DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //CREAR <LI>
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //REMOVE BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<img src="img/remove.svg" style="width: 28px;" id="remove">';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //apend to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;
    //borrar
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //clases animacion
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

}


function deleteAll() {
	if(confirm("¿Estas seguro que deseas borrar toda la lista?")){
		const list = document.getElementsByClassName('todo-list');
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
	}
}
