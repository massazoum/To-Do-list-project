import _ from 'lodash';
import './style.css';


// function component() {
//  const element = document.createElement('div');

//   // Lodash, now imported by this script
//  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//  element.classList.add('hello');

//  return element;
// }

// document.body.appendChild(component());

// export default component;

// const tasks = [
//  {
//    description: 'play',
//    completed: true,
//    index: 2,
//  },
//  {
//    description: 'diner',
//    completed: false,
//    index: 1,
//  },
//  {
//    description: 'break',
//    completed: true,
//    index: 3,
//  },
// ];

// const renderTasks = () => {
//   const taskList = document.createElement('ul');
//   taskList.classList.add('task-list');
//   tasks.sort((a, b) => a.index - b.index);
  
//   for (let i = 0; i < tasks.length; i++) {
//     const task = tasks[i];
//     const taskItem = document.createElement('li');
//     taskItem.innerText = task.description;
    
//     if (task.completed) {
//       taskItem.classList.add('completed');
//     }
    
//     taskList.appendChild(taskItem);
//   }
  
//   const placeholder = document.getElementById('task-list');
//   placeholder.appendChild(taskList);
  
//   const taskInput = document.getElementById('task-input');
//   const taskButton = document.getElementById('task-button');
  
//   taskButton.addEventListener('click', () => {
//     const newTaskDescription = taskInput.value.trim();
//     if (newTaskDescription) {
//       const newTask = {
//         description: newTaskDescription,
//         completed: false,
//         index: tasks.length + 1,
//       };
//       tasks.push(newTask);
//       renderTasks();
//       taskInput.value = '';
//     }
//   });
// };


// const showtask = () => {
//  const todolists = document.querySelector('.todolist');
//  tasks.forEach((task) => {
//    const todo = document.createElement('li');
//    todo.innerHTML = `${task.description} ${task.completed} ${task.index}`;
//    todolists.appendChild(todo);
//  });
// };

// showtask();
const tasks = [
  { description: "Clean the house", completed: false, index: 0 },
  { description: "Buy groceries", completed: true, index: 1 },
  { description: "Pay bills", completed: false, index: 2 },
  { description: "Go for a run", completed: true, index: 3 },
  { description: "Call mom", completed: false, index: 4 }
];

console.log(tasks);

function renderTasks() {
  const taskList = document.getElementById("task-list");
  
  // Clear any existing tasks
  taskList.innerHTML = "";
  
  // Render each task as a list item
  tasks.forEach(task => {
    const listItem = document.createElement("li");
    listItem.innerHTML =`<div class="divli"> <input type="checkbox" id="my-checkbox" name="my-checkbox" />
    <label for="demoCheckbox"> ${task.description} <i class="fas fa-ellipsis-v" id='fas'></i>
    </div>`  
    
    // Apply completed class if the task is completed
    // if (task.completed) {
    //   listItem.classList.add("completed");
    // }
    
    taskList.appendChild(listItem);
  });
}

window.onload = function() {
  renderTasks();
}
