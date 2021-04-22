import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import { Button, Card } from "react-bootstrap";
import "./index.css";

const LisTodos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

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

  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <Card className="text-center">
        <Card.header>
          <p> ktu jane kategorite</p>
        <Card.Header/>
        <Card.Body>
          {todos.map((todo) => (
            <div className="todo" key={todo.todo_id}>
              {todo.description}
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Edit
              </Button>
              <EditTodo show={modalShow} onHide={() => setModalShow(false)} />
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.todo_id)}
              >
                Delete
              </button>
            </div>
          ))}
        </Card.Body>
      </Card>
    <Fragment/>
  );
};

export default LisTodos;
