const movieModel = require("../models/movies");

module.exports = moviesServices = {
  create: (titulo, sinopseFull, sinopse, poster, link, genero, data) => {
    return new Promise((resolve, reject) => {
      const newMovie = new movieModel({
        titulo,
        sinopseFull,
        sinopse,
        poster,
        link,
        genero,
        data,
      }).save();
      newMovie
        .then((info) => {
          resolve(info);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getAll: () => {
    return movieModel.find({}).lean();
  },
  delete: (movie) => {
    return movieModel.deleteOne({ _id: movie }).exec();
  },
  getById: (movie) => {
    return movieModel.findOne({ _id: movie }).lean();
  },
  update: (obj) => {
    return movieModel
      .findOneAndUpdate(
        { _id: obj.movie },
        {
          ...obj,
        }
      )
      .exec();
  },
};
