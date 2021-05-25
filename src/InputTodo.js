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

  // function MerrCategory(propTypes) {
  //   return (
  //     <Fragment>
  //       <ListCategories
  //         {...propTypes}
  //         id={propTypes.category_id}
  //         value={propTypes.category_id}
  //         key={propTypes.category_id}
  //         onChange={(e) => setDescription(e.target.value)}
  //       />
  //     </Fragment>
  //   );
  // }

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
              value={description.description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={description.note}
              onChange={(e) => setDescription(e.target.value)}
            />
          </p>
          <h5>Click to set category:</h5>
          <ListCategories
            {...propTypes}
            id={propTypes.category_id}
            setDescription={setDescription}
            description={description}
          />
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

export default InputTodo;
