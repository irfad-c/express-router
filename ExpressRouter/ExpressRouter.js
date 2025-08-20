const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const productRouter = require("./Routes/product");
const userRouter = require("./Routes/user");
app.use("/product", productRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("All products");
});

app.listen(port, () => {
  console.log(`App listening on port:${port}`);
});
