var express = require("express");
const userController = require("../controller/user/userController");
const studentController = require("../controller/user/studentController");
var router = express.Router();

/* GET users listing. */
router.get("/", userController.getUser);
router.post("/createUser", userController.createUser);

router.get("/students", studentController.getStudent);
router.post("/createStudent", studentController.createStudent);

module.exports = router;
