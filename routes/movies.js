const router = express.Router();
const moviesControler = require("../controllers/movies");
const movies = require("../models/movies");

router.post("/create", moviesControler.create);
router.get("/getmovie", moviesControler.getAll);
router.delete("/deletemovie", moviesControler.delete);
router.get("/getid", moviesControler.getById);
router.put("/update", moviesControler.update);
module.exports = router;
