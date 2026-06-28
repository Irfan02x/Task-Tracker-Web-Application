import { useEffect, useState } from "react";
import API from "./services/api";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
const [tasks, setTasks] = useState([]);
const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("All");

const fetchTasks = async () => {
try {
const res = await API.get("/");
setTasks(res.data);
} catch (error) {
console.error("Error fetching tasks:", error);
}
};

useEffect(() => {
fetchTasks();
}, []);

const addTask = async (taskData) => {
try {
await API.post("/", taskData);
fetchTasks();
} catch (error) {
console.error("Error adding task:", error);
}
};

const deleteTask = async (id) => {
try {
await API.delete(`/${id}`);
fetchTasks();
} catch (error) {
console.error("Error deleting task:", error);
}
};

const toggleTask = async (task) => {
try {
await API.put(`/${task._id}`, {
...task,
status: "Completed",
});

  fetchTasks();
} catch (error) {
  console.error("Error updating task:", error);
}

};

const editTask = async (id, currentTitle) => {
const newTitle = prompt("Edit task title", currentTitle);

if (!newTitle || !newTitle.trim()) return;

try {
  await API.put(`/${id}`, {
    title: newTitle,
  });

  fetchTasks();
} catch (error) {
  console.error("Error editing task:", error);
}

};

const filteredTasks = tasks.filter((task) => {
const matchesSearch = task.title
.toLowerCase()
.includes(search.toLowerCase());

const matchesStatus =
  statusFilter === "All"
    ? true
    : task.status === statusFilter;

return matchesSearch && matchesStatus;


});

return ( <div className="container"> <h1>Task Tracker</h1>

  <TaskForm onAdd={addTask} />

  <input
    type="text"
    placeholder="Search tasks..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
  >
    <option value="All">All Tasks</option>
    <option value="Pending">Pending</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
  </select>

  <h3>Total Tasks: {filteredTasks.length}</h3>

  <TaskList
    tasks={filteredTasks}
    onDelete={deleteTask}
    onToggle={toggleTask}
    onEdit={editTask}
  />
</div>

);
}

export default App;
