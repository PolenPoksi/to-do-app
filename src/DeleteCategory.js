import React, { Fragment, useEffect, useState } from "react";
import { Card, Row, col } from "react-bootstrap";

import "./index.css";

const DeleteCategory = () => {
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

  //   const DeleteCategory = async (id) => {
  //     try {
  //       const DeleteCategory = await fetch(
  //         `http://localhost:5000/category/${id}`,
  //         {
  //           method: "DELETE",
  //         }
  //       );
  //       setCategory(category.filter((category) => category.category_id !== id));
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  return (
    <Fragment>
      <Card className="text-center" id="createCard">
        <Card.Header>
          <h1> Ketu jane kategorite</h1>
        </Card.Header>
        <Card.Body>
          {category.map((category) => (
            <button id="categButton" key={category.id}>
              {category.category}
              <span id="deletecategory">x</span>
            </button>
          ))}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default DeleteCategory;
