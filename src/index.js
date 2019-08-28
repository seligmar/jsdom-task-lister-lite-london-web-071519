document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const form = document.querySelector('#create-task-form');
form.addEventListener('submit', addTasks);

const list = document.querySelector('#tasks');

const buttons = document.querySelectorAll('ul, li, button');

function createList(text) {
    let li = document.createElement('li');
  li.innerText = text;
    let addButton = document.createElement('button');
    addButton.innerText = 'X';
    addButton.id = text;
    li.append(addButton);
    addButton.addEventListener('click', deleteListItem);
    list.append(li);
}

function addTasks(e) {
  e.preventDefault();
  createList(form[0].value);
  form.reset();
}

function deleteListItem(e) {
    e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);
}
