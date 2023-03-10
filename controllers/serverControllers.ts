type ResponseData = {
  message: string;
  endingMessage: string;
};

type DifferentData = {
  year: number;
  message: string;
};

const getAllData = (req, res) => {
  const responseData: ResponseData = {
    message: "Testingg",
    endingMessage: "12",
  };

  res.status(200).json(responseData);
};

const getDataController = (req, res) => {
  const differentData: DifferentData = {
    year: 2023,
    message: "Forever Learning",
  };

  res.status(200).json(differentData);
};

export { getAllData, getDataController };
