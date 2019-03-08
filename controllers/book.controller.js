var Book = require("../models/book.model");

module.exports = {
  getBooks: function(req, res) {
    Book.find()
      .then(function(result) {
        res.status(200).json(result);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },

  createBook: function(req, res) {
    Book.create({
      title: req.body.title,
      genre: req.body.genre,
      penulis: req.body.penulis
    })
      .then(function(result) {
        res.status(201).json(result);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },

  updateBook: function(req, res) {
    Book.updateOne(
      {
        _id: req.params.id
      },
      {
        title: req.body.title,
        genre: req.body.genre,
        penulis: req.body.penulis
      }
    )
      .then(function(result) {
        res.status(200).json(result);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },

  deleteBook: function(req, res) {
    Book.deleteOne({
      _id: req.params.id
    })
      .then(function(result) {
        res.status(200).json({
          msg: "Berhasil menghapus data!"
        });
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  }
};
