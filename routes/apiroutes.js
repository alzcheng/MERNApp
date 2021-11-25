const router = require("express").Router();
const { test } = require("../controllers/testController")

router.get("/test", test);

router.get("/add", (req, res) => {
  res.send({ msg: "success" });
});

router.get("/dothing", (req, res) => {
  res.send({ msg: "success" });
});

module.exports = router; 