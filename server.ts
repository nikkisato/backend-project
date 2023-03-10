import express from "express";
const app = express();
const cors = require("cors");

const { getAllData, getDataController } = require("./controllers/serverControllers.ts");
const logMiddleware = require("./middlewares/middleware-log");
const requestMiddleware = require("./middlewares/middleware-request")();

/* Middleware */
app.use(cors());

// Variables
const host = "localhost";
const port = 8000;

// 1a
app.get("/", logMiddleware, getAllData);

app.get("/getData", requestMiddleware, getDataController);

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
