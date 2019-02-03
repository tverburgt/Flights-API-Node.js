//GET request to Return All Flights.
function flights(app,file){
  app.get('/flights', (req, res)=>{
    res.send(file);
  });
}

//GET request to Return All Arrivals.
function arrivals(app,file){
  app.get('/flights/arrivals', (req, res)=>{
    let array = [];
    for(let x = 0; x<file.length; x++){
          if(file[x].ArrDep=='A') array.push(file[x].FlightNo);
    }
    if(array.length == 0) return res.status(404).send("No arrivals found");
    res.send(array);
  });
}

//GET request to Return All Departures.
function departures(app,file){
  app.get('/flights/departures', (req, res)=>{
    let array = [];
    for(let x = 0; x<file.length; x++){
          if(file[x].ArrDep=='D') array.push(file[x].FlightNo);
    }
    if(array.length == 0) return res.status(404).send("No departures found");
    res.send(array);
  });
}

//Return only the flight specified. E.g. BA1440
function flight(app,file){
  app.get('/flights/:flight', (req, res)=>{
    for(let x = 0; x<file.length; x++){
      if(req.params.flight == file[x].FlightNo) return res.send(file[x]);
    }
    res.status(404).send(`Flight with ID: ${req.params.flight} was not found`);
  });
}

//Exporting the functions to exports object within the global object, module.
module.exports.flights = flights;
module.exports.arrivals = arrivals;
module.exports.departures = departures;
module.exports.flight = flight;
