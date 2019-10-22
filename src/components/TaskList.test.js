import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import { withPinnedTasks } from './TaskList.stories';

it('renders pinned task at the start of the list', () => {
  const div = document.createElement('div');
  const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
  ReactDOM.render(<TaskList tasks= {withPinnedTasks} {...events} />, div);

  // expect the task title "Task 6" to be render first 
  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
})