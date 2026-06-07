const express = require("assert");
//rest object
const app = express();

//route
//URL: http://localhost:8080;
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome Food Server</h1>");
});

//PORT
const PORT = 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
