# Handling Query Strings in Express
This was for an assignment in my Web Applications & Development class, requiring me to "build an Express NodeJS server that demonstrates how to retrieve and utilize query string data from GET requests".
# Running the Server
I have found two ways in going about this:

<ins>Altering package.json:</ins> Including a "type" : "module" designation, and then additionally "start": "node queryString.js" (singular parameter, btw) within the "scripts" identifier of the package.json file allowed me to run "queryString.js" without needing to alter the filename.

"node queryString.js" would successfully run the code with these alterations.

<ins>Running server as is:</ins> Running "queryString.js" as "queryString.mjs" allowed the program to proceed and the server to run successfully. Otherwise, importing express caused errors to occur, citing issues with importing modules from outside.

"node queryString.mjs" would successfully run the code with these alterations.
# Testing the Query String functionality
I put in place the fields "name", "job", and "faveColor" for testing purposes. Not all fields need to be present or filled out for successful testing to occur. In fact, you could choose to simply go to "http://localhost:3000/?" and the console log will register a response. The order of the fields does not matter when being entered. It is only when an entirely different page outside of "http://localhost:3000/?" is attempted that a 404 error will occur, such as dropping the "?" at the end of the URL.
