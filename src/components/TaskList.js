import React from 'react';

function TaskList({ tasks, onCompleteTask, onRemoveTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center p-2 mb-2 bg-gray-100 rounded-lg shadow-sm"
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onCompleteTask(task.id)}
              className="mr-2"
            />
            <span className={`${ task.completed ? 'line-through text-gray-500' : '' }`}>{task.text}</span>
          </div>
          <button
            onClick={() => onRemoveTask(task.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
