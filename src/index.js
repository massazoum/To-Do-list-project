import _ from 'lodash';
import './style.css';

const tasks = [
  { description: "Clean the house", completed: false, index: 1 },
  { description: "Buy groceries", completed: true, index: 3 },
  { description: "Pay bills", completed: false, index: 2 },
  { description: "Go for a run", completed: true, index: 0 },
  { description: "Call mom", completed: false, index: 4 }
];

const renderTasks = () => {
  const taskList = document.getElementById("task-list");
  const container = document.querySelector('.container');
  tasks.sort((a, b) => a.index- b.index);

  // Clear any existing tasks
  taskList.innerHTML = "";

  // Render each task as a list item
  tasks.forEach(task => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<div class="divli"><div><input type="checkbox" id="my-checkbox" name="my-checkbox" />
    <label for="demoCheckbox"> ${task.description}</div>  <i class="fas fa-ellipsis-v" id='fas'></i>
    </div>`
    taskList.appendChild(listItem);
  });

  container.style.display = 'block';
};


window.onload = ()=> {
  renderTasks();
}
