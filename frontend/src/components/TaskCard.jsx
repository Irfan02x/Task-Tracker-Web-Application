function TaskCard({ task, onDelete, onToggle, onEdit }) {
return ( <div className="card"> <h3>{task.title}</h3>

  <p>{task.description}</p>

  <p>
    <strong>Status:</strong> {task.status}
  </p>

  <p>
    <strong>Priority:</strong>{" "}
    <span
      className={`priority ${task.priority.toLowerCase()}`}
    >
      {task.priority}
    </span>
  </p>

  <div className="btn-group">
    <button
      onClick={() => onEdit(task._id, task.title)}
    >
      ✏️ Edit
    </button>

    {task.status !== "Completed" && (
      <button onClick={() => onToggle(task)}>
        ✅ Complete
      </button>
    )}

    <button onClick={() => onDelete(task._id)}>
      🗑️ Delete
    </button>
  </div>
</div>


);
}

export default TaskCard;
