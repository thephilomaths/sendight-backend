import express from "express";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.send("The sedulous hyena ate the antelope!");
});

app.listen(port);
