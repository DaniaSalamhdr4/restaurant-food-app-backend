const express = require("express");
const { testUserController } = require("../controllres/testController");
//router object
const router = express.Router();

//routes GET | POST | Update | DELETE
router.get("/test-User", testUserController);

//export
module.exports = router;
