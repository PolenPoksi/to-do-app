import React, { Fragment, useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

import "./index.css";

const ListCategories = (propTypes) => {
  const [category, setCategory] = useState([
    {
      name: "",
      id: "",
    },
  ]);
  const { name, id } = propTypes;

  const putCategory = async () => {
    try {
      const response = await fetch("http://localhost:5000/category");
      const jsonData = await response.json();
      console.log(jsonData);
      setCategory(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    putCategory();
  }, []);

  const GetCategory = async (e) => {
    console.log(e);
    try {
      const jsonData = await fetch(`http://localhost:5000/category/${e}`, {
        method: "GET",
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const clickHandler = (cat) => {
    GetCategory(cat.category_id);
  };
  return (
    <Fragment>
      {category.map((cat) => (
        <button id="categButton" key={cat.category_id} onClick={clickHandler}>
          {cat.category}
        </button>
      ))}
    </Fragment>
  );
};

export default ListCategories;
