const input = document.getElementById('todo-input')
const addButton = document.getElementById('add-button')
const todoList = document.getElementById('todo-list')

addButton.addEventListener('click', handleClick)
input.addEventListener('input', onType)

function handleClick() {
    //create list
    const todo = createListItem(input.value)
    //append new todo to the ul
    todoList.appendChild(todo)
    //set input value === '' again.
    input.value = ''
    //disable add button
    addButton.disabled = true;

}

function onType() {
    addButton.disabled = input.value.length === 0;
}

function createListItem(value) {

    const li= document.createElement('li');
    const p= document.createElement('p');
    p.textContent= value;

    const deleteButton= document.createElement('button')
    deleteButton.textContent= 'X';
    deleteButton.setAttribute('id', 'delete-button')
    deleteButton.addEventListener('click', removeList)

    li.appendChild(p)
    li.appendChild(deleteButton)

    return li


}

function removeList(){

    this.parentNode.remove()

}
