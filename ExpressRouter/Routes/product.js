const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("All products - Read");
});

router.get("/details", (req, res) => {
  res.send("All products details - Read");
});

router.put("/", (req, res) => {
  res.send("All products - Update/Edit");
});

router.post("/", (req, res) => {
  res.send("All products - Create");
});

router.delete("/", (req, res) => {
  res.send("All products - Delete");
});

module.exports = router;
