const express = require("express");
const config = require("./config");
const Library = require("./Library");

const library = new Library();

const app = express();
app.use(express.json());

app.post("/api/user/login", (req, res) => {
  res.status(201).json({ id: 1, mail: "test@mail.ru" });
});

app.get("/api/books", (req, res) => {
  res.json(library.getAll());
});

app.get("/api/books/:id", (req, res) => {
  const { id } = req.params;
  try {
    res.json(library.get(id));
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.post("/api/books", (req, res) => {
  const data = req.body;
  try {
    res.status(201).json(library.add(data));
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.put("/api/books/:id", (req, res) => {
  const data = req.body;
  const { id } = req.params;

  try {
    res.json(library.update(id, data));
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.delete("/api/books/:id", (req, res) => {
  const { id } = req.params;

  try {
    library.remove(id);
    app.json({ success: true });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.listen(config.PORT);
