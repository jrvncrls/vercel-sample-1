const express = require("express");

const app = express();
const port = process.env.PORT || 3002;

app.use("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});
