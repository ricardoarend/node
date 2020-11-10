const moviesServices = require("../services/movies");
const { reject } = require("q");

module.exports = moviesControler = {
  create: (req, res) => {
    const {
      titulo,
      sinopseFull,
      sinopse,
      poster,
      link,
      genero,
      data,
    } = req.body;
    moviesServices
      .create(titulo, sinopseFull, sinopse, poster, link, genero, data)
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "deu ruim" + err,
        });
      });
  },
  getAll: (req, res) => {
    moviesServices
      .getAll()
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "deu ruim" + err,
        });
      });
  },
  delete: (req, res) => {
    const movieID = req.body.movieID;
    moviesServices
      .delete(movieID)
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "deu ruim" + err,
        });
      });
  },
  getById: (req, res) => {
    const movieID = req.body.movieID;
    moviesServices
      .getById(movieID)
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "deu ruim" + err,
        });
      });
  },
  update: (req, res) => {
    const obj = {
      titulo: req.body.titulo,
      sinopseFull: req.body.sinopseFull,
      sinopse: req.body.sinopse,
      poster: req.body.poster,
      link: req.body.link,
      genero: req.body.genero,
      data: req.body.data,
      movie: req.body.movieId,
    };
    moviesServices
      .update(obj)
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "deu ruim" + err,
        });
      });
  },
};
