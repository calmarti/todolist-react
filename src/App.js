// import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  console.log(tasks);
  console.log(name);
 

  // const handleChange = (ev) => {
  //   setName((prevState) => ({
  //     ...prevState,
  //     [ev.target.name]: ev.target.value,
  //   }));
  // };

  const addTask = (ev) => {
    setName(ev.target.value);
  };

  const deleteTask = (ev, id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const checkTask = (ev, id) => {
    const tasksAfterCheck = tasks.map(task => {
      if (task.id === id){
        task.completed = !task.completed
      }
      return task     
    });
    setTasks(tasksAfterCheck);
  };

  //bug: cuando borras una task si hay inputs checkbox marcados debajo, estos se desmarcan (aunque los valores se mantienen)

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setTasks((prevState) => [
      ...prevState,
      { id: nanoid(), name: name, completed: false },
    ]);
  };

  return (
    <>
      <h2> My First (Ever) Todo List</h2>
      <div className="list">
        <ul>
          {" "}
          {tasks.length
            ? tasks.map((task) => (
                <>
                  <li key={task.id}>
                    {task.name}
                    <input
                      type="checkbox"
                      onChange={(ev) => checkTask(ev, task.id)}
                    />
                    Completed
                    <button>Edit</button>
                    <button onClick={(ev) => deleteTask(ev, task.id)}>
                      Delete
                    </button>
                  </li>
                </>
              ))
            : null}
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          <input type="textarea" name="name" onChange={addTask} />
          <button type="submit">Agregar</button>
        </label>
      </form>

      <button>Show All</button>
      <button>Show All Active</button>
      <button>Show All Completed</button>
    </>
  );
}

export default App;
