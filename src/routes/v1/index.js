const express = require("express");

const router = express.Router();
const usersRouter = require("./auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/users", usersRouter);

module.exports = router;
