const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description, note, category_id } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description, note, category_id) VALUES($1, $2, $3) RETURNING *",
      [description, note, category_id]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET DESCRIPTION = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json("Todo was updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json("U fshi acc");
  } catch (err) {
    console.error(err.message);
  }
});

//Routes//
app.listen(5000, () => {
  console.log("server has started on port 5000");
});

// create a category

app.post("/category", async (req, res) => {
  try {
    const { category } = req.body;
    const newCategory = await pool.query(
      "INSERT INTO category (category) VALUES($1) RETURNING *",
      [category]
    );

    res.json(newCategory.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all categories
app.get("/category", async (req, res) => {
  try {
    const allCategories = await pool.query("SELECT * FROM category");
    res.json(allCategories.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// delete category

app.delete("/category/:category_id", async (req, res) => {
  try {
    const { category_id } = req.params;
    const deleteCategory = await pool.query(
      "DELETE FROM category WHERE category_id = $1",
      [category_id]
    );

    res.json("U fshi acc");
  } catch (err) {
    console.error(err.message);
  }
});

//get a category by id
app.get("/category/:category_id", async (req, res) => {
  try {
    const { category_id } = req.params;
    const category = await pool.query(
      "SELECT * FROM category WHERE category_id = $1",
      [category_id]
    );
    res.json(category.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
