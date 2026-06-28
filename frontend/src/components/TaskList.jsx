import TaskCard from "./TaskCard";

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
return ( <div>
{tasks.length === 0 ? ( <p>No tasks found</p>
) : (
tasks.map((task) => ( <TaskCard
         key={task._id}
         task={task}
         onDelete={onDelete}
         onToggle={onToggle}
         onEdit={onEdit}
       />
))
)} </div>
);
}

export default TaskList;
