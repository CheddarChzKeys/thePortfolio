const express = require("express");
const app = express();

const PORT = 3030;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to my Portfolio!");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
