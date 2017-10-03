const express = require('express');
const app = express();
//===============================================================================================//

// mongoose DB model schema
const mongoose = require('mongoose');
require('./models/itinerary');


// allow cross-origin resource sharing for development
const cors = require('cors');
app.use(cors());


// middleware to parse all POST/PUT/PATCH body request as req.body on backend
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true })); // handle URL-encoded data


//import mongoose DB model schema
require('./models/itinerary');


// import services (payment handling, email confirmation)
require('./services/stripeBilling');
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


// basic test routes
app.get('/', (req, res) => {
    res.send("hello @ index");
});
app.get('/api/test', (req, res) => {
    res.send('hello @ test page');
});


// =================================================================================================
// SERVER CONFIGURATION                                                                           //
// =================================================================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("NodeJS server started")
});





// not needed: app.use(express.static(path.join(__dirname, 'client/build')));