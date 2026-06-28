import { useState } from "react";

function TaskForm({ onAdd }) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [priority, setPriority] = useState("Medium");
const [status, setStatus] = useState("Pending");

const handleSubmit = (e) => {
e.preventDefault();

if (!title.trim()) {
  alert("Task title is required");
  return;
}

onAdd({
  title,
  description,
  priority,
  status,
});

setTitle("");
setDescription("");
setPriority("Medium");
setStatus("Pending");

};

return ( <form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Enter task title"
value={title}
onChange={(e) => setTitle(e.target.value)}
required
/>

  <textarea
    placeholder="Enter task description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />

  <select
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
  >
    <option value="Low">🟢 Low Priority</option>
    <option value="Medium">🟡 Medium Priority</option>
    <option value="High">🔴 High Priority</option>
  </select>

  <select
    value={status}
    onChange={(e) => setStatus(e.target.value)}
  >
    <option value="Pending">Pending</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
  </select>

  <button type="submit">
    Add Task
  </button>
</form>

);
}

export default TaskForm;
