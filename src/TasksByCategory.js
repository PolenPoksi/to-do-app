import React, { Fragment, useEffect, useState } from "react";
import { Card, Dropdown, Button } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
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
          <h5> Zgjidh kategori per afishim</h5>
          {category.map((category) => (
            <button id="categButton1" key={category.category_id}>
              {category.category}
            </button>
          ))}
          <hr />
          <DropdownButton variant="secondary" title="Fshi Kategori">
            {category.map((category) => (
              <Dropdown.Item
                href="#/fshiKategori"
                key={category.category_id}
                onClick={() => fshiKategori(category.category_id)}
              >
                {category.category}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <AllTasks />
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default TasksByCategory;
