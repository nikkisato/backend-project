## Describe in your own words what middleware are and why they are a useful pattern to use when solving problems. Try to think about how they can be applied not just to Express (they are used in many languages and frameworks).

A middleware is a used as a conversion tool, or an intersecting a function from point A to point C, it would lie in point B and making some changes from point A to fit the needs of point C.

They could be applied on the front end possibly, a reusable component or function?
(I'm blanking on other then express) 

## What is currying? When can it be useful to use?
- I remember we were talking about the currying on the multiple buttons repl, and how there was some that was a anonymous function, maybe this can be used for a repeated function? (trying not to think of onMount in react terms) 
[https://replit.com/@NikkiSato/React-currying-example](https://replit.com/@NikkiSato/React-currying-example)

## Describe how currying creates a closure.
- Honestly drawing a blank here 
- does closure here mean end the function?

## In general terms (so not just javascript), what is a module and why are they useful?
- modules are a way to group an object or package it nicely so it's accessible where it needs it to go and be useful

## Before js had modules, what were some issues js developers faced? What patterns were used to avoid those issues?
- developers would have to use IIFE (immediately invoked function expression), they were within their own scopes, and they couldn't be involked again, no global scope avliable, a closed scope? 
- Architecture patterns? like high level, folder strucure? 
- Patterns to avoid these issues were (just gonna ramble here) I'm not sure if there is a vanilla way to do this, but webpack offers the ability to have ouput where you can have a libraryTarget: "Client", and from anywhere in the project you would just need to call the function with Client. Client.hello() in order to access it on a global level
- I don't think the above answer the question but this would be my best guess

## Name three ways bundlers can optimize your code for web performance.
- minifying code
- not sure if this does it automatically, but serve images (reduce resolution? image optimizer?)
- code splitting? 
- lazy loading?
- instead of send 200 files to my phone, it would send 25 (i'm guessing here) 

## What is the purpose of transpiling javascript code?
- to convert one code language to another 
- ES5 to ES6 or vice versa
- keep the code consistent? 

## What is the most popular javascript runtime called that is run on the server?
- Had to google this wasn't familiar with the terminiology runtime 
- but according to google it would be node runtime, theres also browser runtime 


## Why does CORS security exist?
-CORS secuirty exist to protect unwanted fetch calls, for example if i had a customer database, I would only want my frontend to access that data and no one else. 
- Random question, alot of technologies now-a-days talk about how they are scalable, but are the tech that we are using scalable? for example is CORS scalable i know it's for secruity but if I had a company i would want web secruity to grow with the company? 

## When performing an I/O task in Node.js, like reading from a file, explain why using the asynchronous method is typically preferred over a synchronous method
- Need more clarity on what I/O is 
- perferred reason of why we would want to use asynchronous method because (i'll try and do a diagram below)
- asynchronous can run #2 while waiting for #1 to finish and etc, 
- synchronous will run #1 and #2 and #3 (thinking concurrently) for example 
- random question I remember way back about a video of event loop like a queue system, is it possible to overload that? (random thought not releated) 

## Name the three main software languages that form Node.js
- javascript 
- Typescript?
- drawing a blank

## Before Promises existed in Node.js & browser executed js, what pattern was used in asynchronous code?
- event loops?
- callbacks?
- async/await?

## Write an asynchronous function twice using
    - a) async/await;
       async function hello() => {
            const data = await fetch("hello random url");
        }
    - b) then/catch
        function hello2() {
        const data = fetch("hello random url")
        .then((data) => {res.json()})
        .catch(console.error("incorrect URL"))
}

## Create a function called 'wait' that creates a Promise and uses the 'setTimeout' method. Use both 'resolve' and 'reject' callback functions.
function wait() {
    new Promise(resolve, reject).then(() => {
        setTimeout(resolve, 5000) {
            console.log("success");
    }
}

wait();

## Are bundlers used to execute Node.js code?
- I think i asked chris this last time, webpack in my case was only bundling the front end (everthing in client) and not the server which is where the node.js code lives,
- so no I don't beleive bundlers are used to execute node.js code, but theres alot out there (i'm seriously trying not to hop on every single trend cuz that tire me out really quick) 
