const express = require("express");
const cors = require("cors");
const request = require("request");

const app = express();
app.use(cors());

app.get("/proxy", (req, res) => {
  console.log("Proxy request received");
  const imageUrl = req.query.url;
  console.log("Image URL:", imageUrl);
  request(imageUrl).pipe(res);
});

app.listen(5003, () => console.log("Proxy running on port 5000"));
