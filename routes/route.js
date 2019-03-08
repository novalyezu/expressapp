const routes = require("express").Router();
const books = require("../controllers/book.controller");

routes.get("/", books.getBooks);
routes.post("/create", books.createBook);
routes.put("/update/:id", books.updateBook);
routes.delete("/delete/:id", books.deleteBook);

module.exports = routes;
