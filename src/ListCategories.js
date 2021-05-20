import React, { Fragment, useEffect, useState } from "react";

import "./index.css";

const ListCategories = (propTypes) => {
  const [category, setCategory] = useState([
    {
      category_id: "",
      category: "",
    },
  ]);
  const PutCategory = async () => {
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
    PutCategory();
  }, []);

  const GetCategory = async (e) => {
    // console.log(e);
    try {
      const jsonData = await fetch(`http://localhost:5000/category/${e}`, {
        method: "GET",
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  function CategoryButton(propTypes) {
    return (
      <Fragment>
        {category.map((propTypes) => (
          <button
            className="categButton"
            key={propTypes.category.id}
            value={propTypes.category_id}
            onClick={(propTypes) => {
              GetCategory(propTypes.target.value);
            }}
          >
            {propTypes.category}
          </button>
        ))}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <CategoryButton id={propTypes.category_id} />
    </Fragment>
  );
};

export default ListCategories;
