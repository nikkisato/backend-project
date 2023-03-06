import express, { Request, Response } from "express";
const app = express();

type ResponseData = {
  message: string;
  endingMessage: string;
};

// Variables
const host = "localhost";
const port = 8000;

app.get("/", (req, res) => {
  const responseData: ResponseData = {
    message: "Testingg",
    endingMessage: "12",
  };

  res.status(400).json(responseData);
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
