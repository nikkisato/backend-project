import express from "express";
import cors from "cors";
import { getAllData, getDataController } from "./controllers/serverControllers";
import logger from "./middleware/logger";
import { requestLogger1, requestLogger2 } from "./middleware/requestLogger";

// Constant
const HOST = "localhost";
const PORT = 8000;
const app = express();

/* Middleware */
app.use(cors());
app.use(logger);

/* Routes */
app.get("/", requestLogger2("/"), getAllData);
app.get("/getData", requestLogger1, requestLogger2("/getData"), getDataController);
//
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
