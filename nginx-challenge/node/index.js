import handleDatabase from "./database.js";
import express from "express";

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  handleDatabase(res).init();
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
