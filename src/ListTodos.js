import React, { Fragment, useEffect, useState } from "react";

import { Button, Card } from "react-bootstrap";
import "./index.css";

const LisTodos = () => {
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
    } catch (err) {
      console.error(err.message);
    }
  };

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

              <button
                className="categButton"
                key={todo.todo_id}
                onClick={() => deleteTodo(todo.todo_id)}
              >
                Delete
              </button>
              <hr />
            </div>
          ))}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default LisTodos;
