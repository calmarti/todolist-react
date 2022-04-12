import { Checkbox } from "antd";

export default function List({ tasks, checkTask, deleteTask }) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <li className="task" key={task.id}>
          <>
            <span className={task.completed ? "completed" : ""}>
              {" "}
              {task.name}
            </span>
            <Checkbox
            //   type="checkbox"
              onChange={(ev) => checkTask(ev, task.id)}
              defaultChecked={task.completed}
            />
            <button /* onClick={(ev) => editTask(ev, task.id)} */>Edit</button>
            <button onClick={(ev) => deleteTask(ev, task.id)}>Delete</button>
          </>
        </li>
      ))}
    </ul>
  );
}
