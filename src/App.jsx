import React, { useState } from "react";
import "./Dashboard.css";

export default function App() {
  return <Dashboard />;
}

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const addTask = () => {
    if (!title) return;
    const newTask = {
      id: tasks.length + 1,
      title,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const markAsDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: true } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <>
      <header className="header">Task Manager</header>
      <main className="main">
        <section className="taskViewer">
          <span className="taskViewer-title">tasks</span>
          {tasks.map((task) => (
            <div key={task.id} className={`task ${task.isDone ? "done" : ""}`}>
              <span className="task-title">{task.title}</span>
              <div className="buttons">
                {!task.isDone && (
                  <button className="btn" onClick={() => markAsDone(task.id)}>
                    <i className="bx bx-check"></i>
                  </button>
                )}
                <button className="btn" onClick={() => deleteTask(task.id)}>
                  <i className="bx bx-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="addTaskForm">
          <input
            type="text"
            placeholder="Task title"
            value={title}
            className="input"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn-add" onClick={addTask}>
            Add Task
          </button>
        </section>
      </main>
      <footer className="footer"></footer>
    </>
  );
}
