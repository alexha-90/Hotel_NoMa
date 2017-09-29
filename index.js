// maybe need to make model for pricing?
// check if reservation number is unique.    User.findOne (mongoose queries, lecture 4, 5:00)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//const path = require('path');


const app = express();

// allow CORS
app.use(cors());

// middleware to parse all POST/PUT/PATCH body request to req.body
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true })); // handle URL-encoded data

//import DB  model schema
require('./models/itinerary');

// import passport authentication. does not return anything, so does not require variable assignment
require('./services/passport');

// import nodemailer email service for reservation confirmation
require('./services/nodemailer');

// import routes
require('./routes/itinerary-post')(app);
require('./routes/itinerary-get')(app);
require('./routes/itinerary-delete')(app);
require('./routes/billing')(app);

// fetch hidden DB key
const keys = require('./config/keys');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);


//app.use(express.static(path.join(__dirname, 'client/build')));

// basic test routes
app.get('/', (req, res) => {
    res.send("hello");
});
app.get('/api/test', (req, res) => {
    res.send('test page accessed');
});


// =================================================================================================
// SERVER CONFIGURATION
// =================================================================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("NodeJS server started on port 5000")
});