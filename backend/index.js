const express = require("express");
const cors = require("cors");
const { fetchMountains } = require("./notionApi");

const app = express();
app.use(cors());

app.route("/v1/mountains").get(async (req, res) => {
  try {
    const mountains = await fetchMountains();
    return res.json(mountains);
  } catch (e) {
    return res.json({ error: true, message: e.message });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Ecuchaaando la mona en el " + PORT);
});
