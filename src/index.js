import _ from 'lodash';
import './style.css';
import Behaviors from './modules/zoum.js';
import ToDo from './modules/todo.js';

new ToDo(); // calling ToDo

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
