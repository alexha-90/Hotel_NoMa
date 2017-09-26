// maybe need to make model for pricing?
// check if reservation number is unique.    User.findOne (mongoose queries, lecture 4, 5:00)

const express = require('express');
const mongoose = require('mongoose');
const app = express();

//import DB  model schema
require('./models/itinerary');
require('./models/contactInfo');


// import passport authentication. does not return anything, so does not require variable assignment
require('./services/passport');

// import routes
require('./routes/testing')(app);


// fetch hidden DB key
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);




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