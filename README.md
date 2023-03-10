# backend-project

- We'll begin the backend part of our project now. This will primarily be an open REST API that serves json. You can optionally use TypeScript.

## Topics

- Middleware
- Modules
- Currying (basic idea)

## Challenge

- [x] Create an express server.
  - [x] Create a GET route that sends json as the response. This can be any data, but we will build on this so would be good if it is something you are interested in.
  - [x] Create another GET route that sends some different data back. (We'll go over REST principles in the call).
  - [x] Extract your response handlers into modules in a folder called /controllers.
    - For example: `app.get("/my-endpoint", (req, res) => res.json("hello world");`
    - becomes: `app.get("/my-endpoint", myEndpointController);`
  - [x] Add the cors middleware to ensure any browser client can have access to (we'll implement basic authentication later on)
  - [x] There are two ways to implement middleware in Express.
    - `app.use(myMiddleware);
    - app.get("/my-endpoint", myMiddleware, myEndpointController);`
  - [x] Implement your own custom middleware that logs information about the request (where the request is coming from, and what endpoint it is seeking). Ensure this middleware is applied to both routes. Remember you will need to invoke the "next" argument or else the response will never be sent back.
  - [x] Implement a second middleware that does the same thing, but is invoked within each request. This middleware needs to take an argument. As a challenge, don't use an anonymous function.
    - For example it should look similar to this: `app.get("/my-endpoint", myMiddleware("/my-endpoint), myEndpointController);`
    - How can you do this without immediately invoking that middleware function? HINT: a function that returns a function.
  - [x] Extract both middleware functions into two separate modules in a folder called /middleware. Ensure both are default exports and functions should be declarations, not expressions.

JSON FILE: https://github.com/Grunet/digestible-wcag-scraping/blob/13e9050bca9c9b29fcdc75ffcd74f84847b386bc/dist/wcag22.json

## How to read the WCAG JSON file

- Principles Object
  - Perceivable
  - Operable
  - Understandable
  - Robust
    - Guidelines
      - paraText
      - successCriteria
        - links
          - understand
          - meet
          - examples
        - contentMarkup
        - id
        - name
        - level
        - examples
