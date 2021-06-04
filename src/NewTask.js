import React, { Fragment, useState } from "react";
import { Card } from "react-bootstrap";
import ListCategories from "./ListCategories";
import background from "./images/backgr.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewTask = () => {
  const [newTodo, setNewTodo] = useState({
    description: "New task",
    note: "Notes for the task",
    category_id: "",
    date: "",
  });

  const [startDate, setStartDate] = useState(new Date());

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
              }}
            />
          </p>
        </Card.Body>
        <Card.Footer id="noteback">
          <h5>Notes:</h5>
          <p>
            <input
              className="noteForma"
              type="text"
              name="note"
              value={newTodo.note}
              onChange={(e) => {
                setNewTodo({ ...newTodo, note: e.target.value });
              }}
            />
          </p>

          <h5>Date:</h5>

          <p>
            <DatePicker
              setNewTodo={setNewTodo}
              newTodo={newTodo}
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setNewTodo({ ...newTodo, date: startDate });
              }}
            />
          </p>

          <h5>Click to set category:</h5>

          <p>
            <ListCategories setNewTodo={setNewTodo} newTodo={newTodo} />
          </p>

          <hr />

          <button onClick={addTodo} className="butoniShto">
            Create Task
          </button>
        </Card.Footer>
      </Card>
    </Fragment>
  );
};

export default NewTask;
