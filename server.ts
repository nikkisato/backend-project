import express from "express";
const app = express();
const cors = require("cors");

import { getAllData, getDataController } from "./controllers/serverControllers";
import logMiddleware from "./middleware/middleware-log";
import requestMiddleware from "./middleware/middleware-request";

/* Middleware */
app.use(cors());

// Variables
const host = "localhost";
const port = 8000;

app.get("/", logMiddleware, getAllData);

app.get("/getData", requestMiddleware, getDataController);

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
