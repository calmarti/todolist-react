import "./app.css";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  console.log(tasks);
  console.log(filter);

  const addTask = (ev) => {
    setName(ev.target.value);
  };

  const deleteTask = (ev, id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

//TODO: última funcionalidad por implementar:
//const editTask()


  const checkTask = (ev, id) => {
    const tasksAfterCheck = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(tasksAfterCheck);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setTasks((prevState) => [
      ...prevState,
      { id: nanoid(), name: name, completed: false },
    ]);
    setName("");
  };

  const showActiveTasks = () => {
    setFilter("active");
  };

  const showCompletedTasks = () => {
    setFilter("completed");
  };

  const showAllTasks = () => {
    setFilter("all");
  };

  let filteredTasks = tasks;
  switch (filter) {
    case "all":
      filteredTasks = tasks;
      break;
    case "active":
      filteredTasks = tasks.filter((task) => task.completed === false);
       break;
    case "completed":
      filteredTasks = tasks.filter((task) => task.completed === true);
      break;
    default:
      filteredTasks = tasks;
  }

 
  return (
    <>
      <h2 className="heading"> My First (Ever) Todo List</h2>
      <div>
        <ul className="list">
          {" "}
          {filteredTasks.length
            ? filteredTasks.map((task) => (
                <>
                  <li className="task" key={task.id}>
                    <span className={task.completed ? "completed" : ""}>
                      {" "}
                      {task.name}
                    </span>
                    <input
                      type="checkbox"
                      onChange={(ev) => checkTask(ev, task.id)}
                      defaultChecked={task.completed}
                    />
                    <button /* onClick={(ev) => editTask(ev, task.id)} */>
                      Edit
                    </button>
                    <button onClick={(ev) => deleteTask(ev, task.id)}>
                      Delete
                    </button>
                  </li>
                </>
              ))
            : null }
        </ul>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          <input type="textarea" name="name" value={name} onChange={addTask} />
        </label>
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
      <div className="show-buttons">
        <button className="show-buttons-item show-all" onClick={showAllTasks}>
          All
        </button>
        <button
          className="show-buttons-item show-active"
          onClick={showActiveTasks}
        >
          Active
        </button>
        <button
          className="show-buttons-item show-completed"
          onClick={showCompletedTasks}
        >
          Completed
        </button>
      </div>
    </>
  );
}

export default App;
