// Loads all modules required
const express = require('express');             
const dotenv = require('dotenv').config();      
const path = require('path');

// Assigns the express function
const app = express();

//  ****************************  MIDDLEWARE  *********************************

// Serves the index.html page from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Error handling that calls the 404.html page from the public directory
app.use(function (request, response) {
  response.status(404);
  response.sendFile(__dirname + '/404.html')
});

//  ***************************************************************************

// Assigns the .env variable PORT to the "port" variable
const port = process.env.PORT || 3000;

// Listens for a request on port 3000
app.listen(port, function() {
  console.log(`Listening on port: ${port}`);
});

// ************************************************  COMMENTS  ******************************************************
// 
// ATTRIBUTION: Stack Overflow Question: https://stackoverflow.com/questions/31984890/custom-404-page-with-express-js
//
// Line 2: 
// Line 3:
// Line 4:
// Line 7:  Assigns the express() function to the variable "app", which provides the .use() and .listen() methods
// Line 12: 
// Line 15:
// Line 16:
// Line 17:
// Line 23:
// Line 26:
// Line 27:
//
// ******************************************************************************************************************