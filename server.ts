import express, { Request, Response } from "express";
const app = express();

const { getAllData, getDataController } = require("./controllers/serverControllers.ts");

type ResponseData = {
  message: string;
  endingMessage: string;
};

type DifferentData = {
  year: number;
  message: string;
};

// Variables
const host = "localhost";
const port = 8000;

// 1a
app.get("/", getAllData);

app.get("/getData", getDataController);

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
