const express = require("express");

//router object
const router = express.Router();

//routes GET | POST | Update | DELETE
router.get("/test-User", testUserController);

//export
module.exports = router;
