import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [input, setInput] = useState('');

  // Adding the task
  const handleAddTask = () => {
    if (input.trim() !== '') {
      onAddTask(input); // Emit the input value to parent
      setInput('');     // Clear input field
    }
  };

  // Adding the task by (Enter key)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a new task"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
