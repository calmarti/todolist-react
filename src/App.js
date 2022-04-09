// import "./App.css";
import { useState } from "react";

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

  const handleChange = (ev) => {
    setName(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setTasks((prevState) => [...prevState, { name: name, completed: false }]);
  };

  return (
    <>
      <h2> My First (Ever) Todo List</h2>
      <div className="list">
        <ul>
          {" "}
          {tasks.length
            ? tasks.map((task, index) => (
                <>
                  <li key={index}>
                    {task.name}
                    <input type="button" />
                    Edit
                    <input type="button" />
                    Delete
                  </li>
                </>
              ))
            : null}
        </ul>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="textarea" name="name" onChange={handleChange} />
            <button type="submit">Agregar</button>
          </label>
        </form>
      </div>
    </>
  );
}

export default App;
