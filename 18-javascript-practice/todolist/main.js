const input = document.querySelector('.input');
const form = document.querySelector('.form');
const todos = document.querySelector('.todo-wrap .todos');
const todosDone = document.querySelector('.done-wrap .todos');

function undoneHandler(e) {
  const parent = e.target.closest('.todo');
  const task = parent.querySelector('li').textContent;
  todos.insertAdjacentHTML('afterbegin', creatAdjcent(task, 'done'));

  parent.remove();

  // Add done function on dontBtn
  todos.querySelector('.done').addEventListener('click', doneHandler);
  // Add remove function on removeBtn
  todos.querySelector('.remove').addEventListener('click', removeHandler);
}

function removeHandler(e) {
  const parent = e.target.closest('.todo');
  parent.remove();
}

function doneHandler(e) {
  const parent = e.target.closest('.todo-wrap .todo');
  const task = parent.querySelector('li').textContent;

  // Add the task to "done list"
  todosDone.insertAdjacentHTML('afterbegin', creatAdjcent(task, 'undone'));
  const todoDone = document.querySelector('.done-wrap').querySelector('.todo');
  // remove the task in "todo list"
  parent.remove();
  // Add removeBtn function here too
  todoDone.querySelector('.remove').addEventListener('click', removeHandler);
  // Add undoneBtn function here
  todoDone.querySelector('.undone').addEventListener('click', undoneHandler);
}

function creatAdjcent(task, type) {
  return `
    <div class="todo">
      <li>${task}</li>
      <div class="btns">
        <button class=${type}>${type}</button>
        <button class="remove">remove</button>
      </div>
      <div class="clearboth"></div>
    </div>
    
  `;
}

form.addEventListener('submit', (e) => {
  const inputVal = input.value;
  e.preventDefault();

  if (!inputVal) return;

  // Add todo in the list with input value
  todos.insertAdjacentHTML('afterbegin', creatAdjcent(inputVal, 'done'));

  // btn "done" function
  const doneBtn = document.querySelector('.done');
  doneBtn.addEventListener('click', doneHandler);

  // btn "remove" function
  const removeBtn = document.querySelector('.remove');
  removeBtn.addEventListener('click', removeHandler);

  input.value = '';
});
