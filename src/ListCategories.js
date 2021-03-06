import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import "./index.css";

const ListCategories = ({ setNewTodo, newTodo }) => {
  const [category, setCategory] = useState([
    {
      category_id: "",
      category: "",
    },
  ]);
  const GetCategory = async () => {
    try {
      const response = await fetch("http://localhost:5000/category");
      const jsonData = await response.json();
      setCategory(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    GetCategory();
  }, []);

  function CategoryButton() {
    return (
      <>
        {category.map((c) => {
          return (
            <Button
              className="categButton"
              key={c.category_id}
              value={c.category_id}
              onClick={() => {
                setNewTodo({ ...newTodo, category_id: c.category_id });
              }}
            >
              {c.category}
            </Button>
          );
        })}
      </>
    );
  }

  return (
    <>
      <CategoryButton />
    </>
  );
};

export default ListCategories;
