// Create web server with express
// Create a route to get all comments
// Create a route to add a comment
// Create a route to update a comment
// Create a route to delete a comment

// Require express
const express = require("express");

// Create web server
const app = express();

// Use middleware to parse JSON
app.use(express.json());

// Create a route to get all comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Create a route to add a comment
app.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Create a route to update a comment
app.put("/comments/:id", (req, res) => {
  const id = req.params.id;
  const comment = req.body;
  comments[id] = comment;
  res.status(200).json(comment);
});

// Create a route to delete a comment
app.delete("/comments/:id", (req, res) => {
  const id = req.params.id;
  comments.splice(id, 1);
  res.sendStatus(204);
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// Comments array
const comments = [
  {
    id: 1,
    name: "John Doe",
    email: "priyanshukawaii@gmail.com",
    body: "This is a comment",