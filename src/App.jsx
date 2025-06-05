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
          <h3 className="taskViewer-title">Tasks</h3>
          {tasks.map((task) => (
            <div key={task.id} className={`task ${task.isDone ? "done" : ""}`}>
              <strong className="task-title">
                {task.id}. {task.title}:
              </strong>{" "}
              <span className="task-body">{task.body}</span>{" "}
              {!task.isDone && (
                <button className="btn" onClick={() => markAsDone(task.id)}>
                  <i className="bx bx-check"></i>
                </button>
              )}{" "}
              <button className="btn" onClick={() => deleteTask(task.id)}>
                <i className="bx bx-trash"></i>
              </button>
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
