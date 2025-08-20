const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All products - Read");
});

router.put("/", (req, res) => {
  res.send("User Profile= - Update/Edit");
});

router.post("/", (req, res) => {
  res.send("User Profile= - Create");
});

router.delete("/", (req, res) => {
  res.send("User Profile= - Delete");
});

module.exports = router;
