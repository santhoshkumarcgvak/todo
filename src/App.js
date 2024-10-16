import React, { useState } from 'react';
import AddTask from './components/AddTask';   // Import AddTask component
import TaskList from './components/TaskList'; // Import TaskList component

function App() {
  const [tasks, setTasks] = useState([]);  // Tasks list

  // Function to add a new task
  const handleAddTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle task completion
  const toggleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to remove a task
  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

        {/* Add Task Component */}
        <AddTask onAddTask={handleAddTask} />

        {/* Task List Component */}
        <TaskList
          tasks={tasks}
          onCompleteTask={toggleCompleteTask}
          onRemoveTask={handleRemoveTask}
        />
      </div>
    </div>
  );
}

export default App;
