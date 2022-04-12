import { Row, Col, Checkbox, Button } from "antd";

export default function List({ tasks, checkTask, deleteTask }) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <li className="task" key={task.id}>
          <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                <p style={{display:"inline-block"}} className={task.completed ? "completed" : ""}>
                  {" "}
                  {task.name}
                </p>
              </Col>

              <Col className="gutter-row" span={6}>
                <Checkbox
                  //   type="checkbox"
                  onChange={(ev) => checkTask(ev, task.id)}
                  defaultChecked={task.completed}
                />
              </Col>

              <Col className="gutter-row" span={6}>
                <Button /* onClick={(ev) => editTask(ev, task.id)} */>
                  Edit
                </Button>
              </Col>

              <Col className="gutter-row" span={6}>
                <Button onClick={(ev) => deleteTask(ev, task.id)}>
                  Delete
                </Button>
              </Col>

            </Row>
          </>
        </li>
      ))}
    </ul>
  );
}
