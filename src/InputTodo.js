import React, { Fragment, useState } from "react";
import { Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import ListCategories from "./ListCategories";

const InputTodo = () => {
  const [description, setDescription] = useState({
    description: "New task",
    note: "Notes for the task",
    category_id: "",
  });

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <Card className="text-center" id="createCard">
        <Card.Body>
          <h2> Create</h2>
          <h3>New task</h3>

          <p>
            <input
              type="text"
              name="description"
              value={description.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </p>
        </Card.Body>
        <Card.Footer>
          <p>Notes</p>
          <p>
            <input
              type="text"
              name="note"
              value={description.note}
              onChange={(e) => setDescription(e.target.value)}
            />
          </p>
          <ListCategories
            value={description.category_id}
            key={propTypes.id}
            {...propTypes}
          />
          <hr />
          <div>
            <button onClick={addTodo}>Create Task</button>
          </div>
        </Card.Footer>
      </Card>
    </Fragment>
  );
};

export default InputTodo;
