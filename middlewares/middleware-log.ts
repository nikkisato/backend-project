import { Request, Response, NextFunction } from "express";

//Implement your own custom middleware that logs information about the request
// (where the request is coming from, and what endpoint it is seeking).
// Ensure this middleware is applied to both routes.
// Remember you will need to invoke the "next" argument
// or else the response will never be sent back.

function logMiddleware(req: Request, res: Response, next: NextFunction) {
  //where the request is coming from
  console.log("heres the where the request is coming from");
  // what endpoint it is seeking
  console.log(JSON.stringify(req.route));
  next();
}

export default logMiddleware;
