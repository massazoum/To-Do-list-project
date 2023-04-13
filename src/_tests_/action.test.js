// /**
//  * @jest-environment jsdom
//  */

import '../__mocks__/mockHtml.js';
import '../__mocks__/mockJs.js';
import { screen, fireEvent } from '@testing-library/dom';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import '@testing-library/jest-dom/extend-expect';
// import Todo from '../modules/ToDo.js';
import ToDo from '../modules/todo.js';

describe('Unit-test for edit/toggle methods', () => {
  const todo = new ToDo();
  todo.storage.set([]); // reset initial list
  todo.list = []; // reset initial list
  // pre-insert
  todo.add('washing dishes');
  todo.add('coding hobby projects');
  todo.add('reviewing codes');

  it('description should be updated', () => {
    expect(todo.list[0].description).toEqual('washing dishes');
    todo.update(1, 'clean desk'); // edit
    expect(todo.list[0].description).toEqual('clean desk');
  });

  it('task status should be toggled', () => {
    expect(todo.list[0].completed).toStrictEqual(false);
    todo.toggleTask(1); // toggle the task status
    expect(todo.list[0].completed).toStrictEqual(true);
  });
});

describe('Unit-test for clear method', () => {
  const todo = new ToDo();
  todo.storage.set([]); // reset initial list
  todo.list = []; // reset initial list
  // pre-insert
  todo.add('washing dishes');
  todo.add('coding hobby projects');
  todo.add('reviewing codes');
  // mark as completed
  todo.toggleTask(2);
  todo.toggleTask(3);

  it('should be remove all completed tasks', () => {
    expect(todo.list.length).toEqual(3);
    todo.clearCompleted(); // clear all completed tasks
    expect(todo.list.length).toEqual(1);
  });
});

describe('Integration tests:user-usage', () => {
  const todo = new ToDo();
  todo.list = []; // reset initial list
  todo.storage.set([]); // reset initial list
  todo.render.render(); // render items first

  it('form should be visible', () => {
    const doc = screen.getByTestId('doc');
    expect(doc).toBeInTheDocument();
    expect(doc.querySelector('#input')).toBeInTheDocument();
    expect(doc.querySelector('#list')).toBeInTheDocument();
    expect(doc.querySelector('#btn-clear')).toBeInTheDocument();
  });

  it('input field should be writeable', () => {
    const input = screen.getByRole('insertion');
    fireEvent.change(input, { target: { value: 'project-01' } });
    expect(input.value).toStrictEqual('project-01');
  });

  it('user should be able to insert new task', () => {
    const input = screen.getByRole('insertion');
    fireEvent.change(input, { target: { value: 'project-02' } });
    fireEvent.keyDown(input, { key: 'Enter', charCode: 13 });
    expect(screen.getByDisplayValue('project-02')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(1);
  });
});

describe('Integration tests:actions', () => {
  const todo = new ToDo();
  todo.storage.set([]); // reset initial list
  todo.list = []; // reset initial list
  // pre-insert
  todo.add('washing dishes');
  todo.add('coding hobby projects');
  todo.add('reviewing codes');
  // render items first
  todo.render.render();

  it('list should be rendered', () => {
    expect(todo.list.length).toEqual(3);
    todo.render.render();
  });
});
