## Why would we want to use a middleware pattern in software development?

- modify the response object?

* Grabbed this from google
* The main purpose of the middleware is to modify the req and res objects, and then compile and execute any code that is required. It also helps to terminate the request-response session and call for the next middleware in the stack.
* https://www.turing.com/kb/building-middleware-for-node-js

## Why do we implement middleware 2 different ways (app level vs route level)?

- app level would be for cors high level
- route level would be to control how we passing around data, possible to convert json from a response?
