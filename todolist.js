const todoList = [
  {
    name: [],
    dueDate: []
  },
  {
    name: [],
    dueDate: []
  }
];

renderTool();

function renderTool() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div class="todo-item">
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete" onclick="
          todoList.splice(${i}, 1);
          renderTool();
        ">
          Delete
        </button>
      </div>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todolist').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

 

  const dateInputElement = document.querySelector('.date');
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });

  inputElement.value = '';

  renderTool();
}
v