const struct = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  sinopseFull: {
    type: String,
    required: false,
  },
  sinopse: {
    type: String,
    required: false,
  },
  poster: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  genero: {
    type: String,
    required: false,
  },
  data: {
    type: String,
    required: false,
  },
});

module.exports = db.model("movie", struct);
