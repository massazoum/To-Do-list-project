import _ from 'lodash';

import './style.css';

import Behaviors from './modules/zoum.js';
import ToDo from './modules/todo.js';
// import './style.css';

// eslint-disable-next-line no-new
new ToDo(); // calling ToDo

// Functionalities behaviors
const input = document.querySelector('#input');
const reload = document.querySelector('#reload');
const clear = document.querySelector('#btn-clear');

const insertTask = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    Behaviors.insert(event);
  }
};

const clearAllCompleted = () => Behaviors.clearCompleted();

const reloadList = () => {
  document.querySelector('#list').innerHTML = '<li>Reloading...</li>';
  reload.classList.add('spin');
  setTimeout(() => {
    Behaviors.reload();
    reload.classList.remove('spin');
  }, 1500);
};

// after page loads
document.addEventListener('DOMContentLoaded', () => {
  // event bindings
  reload.addEventListener('click', reloadList);
  input.addEventListener('keypress', insertTask);
  clear.addEventListener('click', clearAllCompleted);
});

























































































// import {tasks} from './modules/add&remove.js';
// import { addTask, deleteTask ,inputform0, bntsubmit0 ,renderTasks} from './modules/add&remove.js';
// import { taskInput,showTodo,tasks} from './modules/todo.js';


// // tasks = JSON.parse(localStorage.getItem("tasks"))



 


//  let buttonClicked = false;
//  const  bntsubmit0=document.querySelector('.bntsubmit0');

//  bntsubmit0.addEventListener('click', function() {
//   let userTask =  taskInput.value.trim();
//   let newTask = {
//     description: userTask,
//     completed: false,
//    };
//  buttonClicked = true;
 
//  if (buttonClicked && taskInput.value !=""){

//       tasks.push(newTask);
//     const indexx = tasks.findIndex(obj => obj.description === taskInput.value);
//     newTask.index = indexx ;
//     showTodo()
//  }})






//  taskInput.addEventListener("keyup", e => {
  
//    let userTask = taskInput.value.trim();
 
//    if (e.key == 'Enter' && userTask) {
//     //  taskInput.value = '';
//     console.log(taskInput.value.trim());
//       if(!tasks){
//         tasks=[];
//       }
      

//      let newTask = {
//        description: userTask,
//        completed: false,
//      };
//      tasks.push(newTask);
//     //  localStorage.setItem('tasks', JSON.stringify(tasks));
//     //  console.log('localStorage updated:', localStorage.getItem('tasks'));
//      showTodo();
//    }
//  });
 





























// taskInput.addEventListener("keyup" ,e =>{
//   let userTask = taskInput.Value.trim();
//   if(e.key ==' Enter' && userTask){
//    // getting localstorage todo-list 
//    if(!tasks){
//     // if tasks isn't exist ,pass an empty array to tasks
//     tasks =[];
//    }
//    taskInput.value ='';

//    let newTask = {
//     description: userTask,
//     completed: false,
//   }
//   tasks.push(newTask);
   
//   localStorage.setItem('tasks',JSON.stringify(tasks));
//   showTodo();
//   }
 
//  })



// taskInput.addEventListener("keyup", e => {
//   let userTask = taskInput.value.trim(); // Trim the value of the task input element
//   if (e.key == 'Enter' && userTask) {
  
//     if(!tasks){
//       tasks=[];
//     }

//     // let tasks = JSON.parse(localStorage.getItem('todo-list')) || []; // Get the tasks from localStorage or set an empty array

//     taskInput.value = '';
//     let newTask = {
//       description: userTask,
//       completed: false,
//     }
//     tasks.push(newTask);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     showTodo();
//   }

// });


