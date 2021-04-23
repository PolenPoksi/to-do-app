import React, { Fragment, useEffect, useState } from "react";

import "./index.css";

const ListCategories = () => {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
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
    getCategory();
  }, []);

  const PutCategory = async (e) => {
    console.log(e);
    try {
      const jsonData = await fetch(`http://localhost:5000/category/${e}`, {
        method: "GET",
      });
      // setCategory(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  // useEffect(() => {
  //   PutCategory();
  // }, []);

  return (
    <Fragment>
      {category.map((cat) => (
        <button
          id="categButton"
          key={cat.category_id}
          onClick={() => PutCategory(cat.category_id)}
        >
          {cat.category}
        </button>
      ))}
    </Fragment>
  );
};

export default ListCategories;
