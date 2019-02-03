//Nodejs API to display information from JSON file.
//The JSON file contains and array of ojects of various flights at Edinburgh airport
//Objects are extracted and then displayed on client requests via the port 3000.
//The API has various routes for different inforamtion for clients to request.
//GET operation is used to provide the functionality of this API

const express = require('express'); //Framework used in creating GET routes
const app = express();
const file = require('./flights'); //Passed an array of flight objects.
const read = require('./read'); //Extend the fuctions from read.js

//Various Read (GET) routes or endpoints created.
read.flights(app,file);  // http://localhost:3000/flights
read.arrivals(app,file);  // http://localhost:3000/flights/arrivals
read.departures(app,file);  // http://localhost:3000/flights/departures
read.flight(app,file);  // http://localhost:3000/flights/:flight

//Initialised port.
const port = process.env.PORT || 3000; //Find port that will be used by webservice using the global object process.
app.listen(port, ()=>{
  console.log(`Listening through port ${port}`);
});
