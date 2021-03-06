import { Row, Col, Checkbox } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export default function List({ tasks, checkTask, deleteTask }) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <li className="task" key={task.id}>
          <div className="row-container">
            <Row
              justify="center"
              style={{
                margin: "0.4rem 0",
                padding: "1rem 0 0 0",
              }}
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              <div className="col-container">
                <Col
              
                  className="gutter-row"
                  span={18}
                >
                  <p
                    style={{
                      display: "inline-block" ,
                    }}
                    className={task.completed ? "completed" : ""}
                  >
                    {" "}
                    <strong>{task.name}</strong>
                  </p>
                </Col>

                <Col className="gutter-row" span={1}>
                
                  <Checkbox
                    //   type="checkbox"
                    onChange={(ev) => checkTask(ev, task.id)}
                    defaultChecked={task.completed}
                  />
                </Col>

                <Col className="gutter-row" span={1}>
                  <EditOutlined />
                </Col>

                <Col className="gutter-row" span={1}>
                  <DeleteOutlined onClick={(ev) => deleteTask(ev, task.id)} />
                </Col>
              </div>
            </Row>
          </div>
        </li>
      ))}
    </ul>
  );
}
