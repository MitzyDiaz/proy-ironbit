//SELECTORES
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOp = document.querySelector('.filter-todo');
const todoRBtn = document.querySelector('.todo-remove-btn');
const mensaje = document.querySelector('.msg');

//EVENTOS
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOp.addEventListener('click', filterTodo);
todoRBtn.addEventListener('click', deleteAll);




if(todoList.childElementCount < 1){
	alert("No hay Todo's Tomate un Café");
}

//FUNCIONES
function addTodo(event) {
    //para que no haga submit el boton
    event.preventDefault();
    //CREAR DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //CREAR <li>
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<img src="img/tick.svg" id="add">';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //CHECK MARK BUTTON
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

    //seleccionar
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });

}
function deleteAll() {
	if(confirm("¿Estas seguro que deseas borrar toda la lista?")){
		const list = document.getElementsByClassName('todo-list');
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
	}
}