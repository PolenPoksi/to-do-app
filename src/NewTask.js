import React, { Fragment, useState } from "react";
import { Card } from "react-bootstrap";
import ListCategories from "./ListCategories";

const NewTask = () => {
  const [newTodo, setNewTodo] = useState({
    description: "New task",
    note: "Notes for the task",
    category_id: "",
  });

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const body = newTodo;
      const response = fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/AllTasks";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Card className="text-center" id="createCard">
        <Card.Body>
          <h3> Create</h3>
          <h2>Task name</h2>
          <p>
            <input
              className="inputiForma"
              type="text"
              name="description"
              value={newTodo.description}
              onChange={(e) => {
                setNewTodo({ ...newTodo, description: e.target.value });
                console.log(e.target.value);
              }}
            />
          </p>
        </Card.Body>
        <Card.Footer>
          <h5>Notes:</h5>
          <p>
            <input
              className="inputiForma"
              type="text"
              name="note"
              value={newTodo.note}
              onChange={(e) => {
                setNewTodo({ ...newTodo, note: e.target.value });
              }}
            />
          </p>
          <h5>Click to set category:</h5>
          <ListCategories setNewTodo={setNewTodo} newTodo={newTodo} />
          <hr />
          <div>
            <button onClick={addTodo} className="butoniShto">
              Create Task
            </button>
          </div>
        </Card.Footer>
      </Card>
    </Fragment>
  );
};

export default NewTask;
