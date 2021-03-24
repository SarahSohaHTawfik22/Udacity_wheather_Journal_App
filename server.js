// Setup empty JS object to act as endpoint for all routes
projectData = {};
const port = 3333;
const app = express();

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const server = app.listen(port, listening);
function listening(){
    console.log(`server running on localhost:${port}`);
}
//route GET
app.get('/Alldataa', geting_Weather);
function geting_Weather(request, response) {
  response.send(projectData);
}
//route POST
app.post('/Weatheradding', addingg_Weather);
function addingg_Weather(request,response){
  projectData.feels = request.body.feels;
  projectData.date = request.body.date;
  projectData.temperature = request.body.temperature;

    response.send(projectData);
}