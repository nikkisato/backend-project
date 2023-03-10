import { Request, Response, NextFunction } from "express";

// Implement a second middleware that does the same thing, but is invoked within each request.
// This middleware needs to take an argument. As a challenge, don't use an anonymous function.
// For example it should look similar to this:
// app.get("/my-endpoint", myMiddleware("/my-endpoint), myEndpointController);
// How can you do this without immediately invoking that middleware function?
// HINT: a function that returns a function.

export default function requestMiddleware(req: Request, res: Response, next: NextFunction) {
  //where the request is coming from
  console.log("heres the where the request is coming from");
  // what endpoint it is seeking
  console.log(JSON.stringify(req.route));
  next();
}

//in server.ts file
// const requestMiddleware = require("./middlewares/middleware-request")();
