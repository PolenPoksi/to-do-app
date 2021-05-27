import React, { Fragment, useEffect, useState } from "react";

import { Button, Card, Modal } from "react-bootstrap";

import "./index.css";

const AllTasks = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
      setShow(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Card className="text-center" id="createCard1">
        <Card.Header>
          <h3> Ketu jane gjithe tasket per tu bere: </h3>
        </Card.Header>
        <Card.Body>
          {todos.map((todo) => (
            <div>
              <h4>{todo.description}</h4>
              <p>{todo.note}</p>

              <Button key={todo.todo_id} className="categButton">
                Edit
              </Button>
              <Button className="categButton" onClick={handleShow}>
                Delete
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                id="popup"
                className="my-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    Are you sure you want to delete this todo item ?
                  </Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    className="btn-danger"
                    key={todo.todo_id}
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>
              <hr />
            </div>
          ))}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default AllTasks;
