import React, { Fragment, useEffect, useState } from "react";
import {
  Card,
  Button,
  ButtonToolbar,
  ButtonGroup,
  Pagination,
} from "react-bootstrap";

import AllTasks from "./AllTasks";

import "./index.css";

const TasksByCategory = () => {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const response = await fetch("http://localhost:5000/category");
      const jsonData = await response.json();
      setCategory(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  const fshiKategori = async (id) => {
    try {
      const fshiKategori = await fetch(`http://localhost:5000/category/${id}`, {
        method: "DELETE",
      });
      setCategory(category.filter((category) => category.category_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Card className="text-center" id="createCard">
        <Card.Body>
          <p>
            <h5> Zgjidh kategori per afishim</h5>
          </p>
          <Pagination>
            <Pagination.Prev />

            {category.map((category) => (
              <ButtonGroup className="mr-2" aria-label="Grupi par">
                <Button className="categButton">{category.category}</Button>
                <Button
                  className="categButton"
                  key={category.category_id}
                  onClick={() => fshiKategori(category.category_id)}
                >
                  x
                </Button>
              </ButtonGroup>
            ))}

            <Pagination.Next />
          </Pagination>

          <hr />

          <AllTasks />
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default TasksByCategory;
