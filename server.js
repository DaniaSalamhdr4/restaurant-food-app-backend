const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dot env configuration
dotenv.config();

//DB connection
connectDB();

//rest object
const app = express();

//middleware
app.use(cors()); //to allow cross-origin requests
app.use(express.json()); //to parse JSON request bodies
app.use(morgan("dev")); //to log HTTP requests in the console
//route
//URL: http://localhost:8080;
app.use('/api/v1/test', require('./routes/testRoutes'))
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome Food Server APP</h1>");
});
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
  console.log(` node Server is running on port ${PORT}`.white.bgMagenta);
});
