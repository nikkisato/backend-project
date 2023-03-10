import { Request, Response } from "express";

type ResponseData = {
  message: string;
  endingMessage: string;
};

type DifferentData = {
  year: number;
  message: string;
};

const getAllData = (req: Request, res: Response) => {
  const responseData: ResponseData = {
    message: "Testingg",
    endingMessage: "12",
  };
  console.log(req);

  res.status(200).json(responseData);
};

const getDataController = (req: Request, res: Response) => {
  const differentData: DifferentData = {
    year: 2023,
    message: "Forever Learning",
  };

  res.status(200).json(differentData);
};

export { getAllData, getDataController };
