const input = document.querySelector('.input');
const form = document.querySelector('.form');
const todos = document.querySelector('.todos');
const todosDone = document.querySelector('.done-wrap .todos');

function doneHandler(e) {
  const parent = e.target.closest('.todo-wrap .todo');
  const task = parent.querySelector('li').textContent;

  // Add the task to "done list"
  todosDone.insertAdjacentHTML('afterbegin', creatAdjcent(task, 'undone'));

  // remove the task in "todo list"
  parent.remove();
}

function creatAdjcent(task, type) {
  return `
    <div class="todo">
      <li>${task}</li>
      <div class="btns">
        <button class=${type}>done</button>
        <button class="remove">remove</button>
      </div>
      <div class="clearboth"></div>
    </div>
    
  `;
}

form.addEventListener('submit', (e) => {
  const inputVal = input.value;
  const removeBtn = document.querySelector('.remove');
  e.preventDefault();

  if (!inputVal) return;

  // Add todo in the list with input value
  todos.insertAdjacentHTML('afterbegin', creatAdjcent(inputVal, 'done'));

  // when clicks "done", replace to "done list"
  const doneBtn = document.querySelector('.done');
  doneBtn.addEventListener('click', doneHandler);

  input.value = '';
});
