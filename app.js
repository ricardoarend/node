express = require("express");
mongoose = require("mongoose");
mongoose.Promise = require("q").Promise;

const bodyParser = require("body-parser");
const { connect } = require("./config/db");
//const db = require("./config/db");

const app = express();
// upload imagem middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: "true",
  })
);

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Conectado",
  });
});

db = connect();
db.then(() => {
  console.log("Conectado");
  const movieRoutes = require("./routes/movies");
  app.use("/movies", movieRoutes);

  app.listen(PORT, () => {
    console.log("Servidor na porta" + PORT);
  });
}).catch((e) => {
  console.log("Não foi possível estabelecer conexão com o banco. :-(", e);
});
