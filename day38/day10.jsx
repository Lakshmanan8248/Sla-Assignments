import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState(""); // Current input value
  const [tasks, setTasks] = useState([]); // List of tasks

  const handleAddTask = () => {
    if (task.trim() === "") return; // Ignore empty tasks
    setTasks([...tasks, task]); // Add new task
    setTask(""); // Clear input
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple To-Do App</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ padding: "10px", width: "300px", fontSize: "16px" }}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ccc",
              textAlign: "left",
              width: "320px",
              margin: "0 auto",
            }}
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
