import "./app.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import List from "./List";
import Counter from "./Counter";
import { Layout, Input, Form, Button, Row, Col } from "antd";

import {
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function App() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);

  console.log(tasks);
  console.log(filter);

  const addTask = (ev) => {
    setName(ev.target.value);
  };

  const deleteTask = (ev, id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setCount((count) => count - 1);
  };

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
    setCount((count) => count + 1);
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
    <Layout className="layout">
      <Header>
        {" "}
        <h2 className="heading">
          {" "}
          A Todo List built with React and Ant Design
        </h2>
      </Header>
      <Content>
        <Counter
          count={count}
          showCount={showCount}
          setShowCount={setShowCount}
        />

        {filteredTasks.length ? (
          <List
            tasks={filteredTasks}
            checkTask={checkTask}
            deleteTask={deleteTask}
          />
        ) : null}

        <Form
          /* style={{border:"solid black 1px"}} */
          name="basic"
          /*  labelCol={{ span: 8 }} */
          wrapperCol={{ span: 24 }}
          className="form"
          onSubmit={handleSubmit}
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

          <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
            {" "}
            <Button
              block
              size="large"
              /*  style={{ padding: "0 17rem" }} */
              /* type="submit"  */ type="primary"
              className="add-button"
              onClick={handleSubmit}
            >
              Add task
            </Button>
          </Form.Item>
        </Form>

        <div className="show-buttons">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} offset={6}>
              <Button
                type="default"
                size="large"
                style={{ backgroundColor: "#69c0ff" }}
                block
                className="show-all"
                onClick={showAllTasks}
              >
                All
              </Button>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} offset={6}>
              <Button
                type="default"
                size="large"
                style={{ backgroundColor: "#91d5ff" }}
                block
                className="show-active"
                onClick={showActiveTasks}
              >
                Active
              </Button>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} offset={6}>
              <Button
                type="default"
                size="large"
                style={{ backgroundColor: "#bae7ff" }}
                block
                className="show-completed"
                onClick={showCompletedTasks}
              >
                Completed
              </Button>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer className="footer">
        <span style={{color:"#FFFFFF"}}>©2022</span>
        <a href="http://linkedin.com/in/calmarti-full-stack-developer">
          <LinkedinOutlined className="icon" style={{fontSize:"26px"}} />
        </a>
        <a href="https://github.com/calmarti">
          <GithubOutlined className="icon" style={{fontSize:"26px"}} />
        </a>
        <a href="https://twitter.com/calmartithings">
          <TwitterOutlined className="icon" style={{fontSize:"26px"}} />
        </a>
      </Footer>
    </Layout>
  );
}

export default App;
