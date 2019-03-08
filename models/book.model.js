const mongoose = require("mongoose");

var bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    genre: String,
    penulis: String
  },
  { timestamps: true }
);

var Book = mongoose.model("books", bookSchema);
module.exports = Book;
