const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
 
app.get("/", (req, res) => {
  res.send("helol");
});

app.get("/weather", (req, res) => {
    res.send("helo weather");
  });
  app.get("/about", (req, res) => {
    res.send("helo about");
  });
  app.get("*", (req, res) => {
    res.send("404 error");
  });
app.listen(port, () => {
  console.log(`app is runnig on por no ${port}`);
});
