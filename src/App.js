import "./app.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import List from "./List";
import { Input, Form, Button } from "antd";

//TODO: Form y Form.Item (tanto para Input como para Button) no pillan el sistema de grid (span:24, etc.), posible predominio de las reglas de app.css

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
    setTasks(tasks.filter((task) => task.id !== id));
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

      {filteredTasks.length ? (
        <List
          tasks={filteredTasks}
          checkTask={checkTask}
          deleteTask={deleteTask}
        />
      ) : null}

      {/* {<ul className="list">
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
                    <button onClick={(ev) => editTask(ev, task.id)}>
                      Edit
                    </button>
                    <button onClick={(ev) => deleteTask(ev, task.id)}>
                      Delete
                    </button>
                  </li>
                </>
              ))
            : null }
        </ul> */}

      <Form
        /* style={{border:"solid black 1px"}} */
        name="basic"
        /*  labelCol={{ span: 8 }} */
        wrapperCol={{ span: 24 }}
        /*  className="form"  */ onSubmit={handleSubmit}
      >
        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Input
            /*  style={{width:""}} */
            label="name"
            maxLength={100}
            showCount
            /* type="textarea"  */
            placeholder="Add a task"
            name="name"
            value={name}
            onChange={addTask}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10 }}>
          <Button
            style={{ padding: "0 6rem" }}
            /* type="submit"  */ type="primary"
            className="add-button"
            onClick={handleSubmit}
          >
            Add task
          </Button>
        </Form.Item>
      </Form>

      <div className="show-buttons">
        <Button
       
          type="default"
          style={{ backgroundColor: "#69c0ff" /* , color:"white"  */}}
          /* className="show-all" */ 
          onClick={showAllTasks}
        >
          All
        </Button>
        <Button 
        type="default"
        style={{ backgroundColor: "#91d5ff" /* , color:"white"  */}}

          /*   className="show-active" */
          onClick={showActiveTasks}
        >
          Active
        </Button>
        <Button 
          type="default"
          style={{ backgroundColor: "#bae7ff"}}
          /* className="show-completed" */
          onClick={showCompletedTasks}
        >
          Completed
        </Button>
      </div>
    </>
  );
}

export default App;
