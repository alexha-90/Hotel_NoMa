// maybe need to make model for pricing?
// check if reservation number is unique.    User.findOne (mongoose queries, lecture 4, 5:00)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const path = require('path');


const app = express();

// middleware to parse all POST/PUT/PATCH body request to req.body
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true })); // handle URL-encoded data

//import DB  model schema
require('./models/itinerary');
require('./models/contactInfo');


// import passport authentication. does not return anything, so does not require variable assignment
require('./services/passport');

// import routes
require('./routes/getItinerary')(app);
require('./routes/testing')(app);
require('./routes/billing')(app);

// fetch hidden DB key
const keys = require('./config/keys');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);


//app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/', (req, res) => {
    res.send("hello");
});



// =================================================================================================
// SERVER CONFIGURATION
// =================================================================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("NodeJS server started on port 5000")
});