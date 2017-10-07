const express = require('express');
const app = express();
const path = require('path');
//===============================================================================================//

// mongoose DB for model schema
const mongoose = require('mongoose');
require('./models/itinerary');
require('./models/contactUsEmail');


// allow cross-origin resource sharing for development
const cors = require('cors');
app.use(cors());


// middleware to parse all POST/PUT/PATCH body request as req.body on backend
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // handle json data
app.use(bodyParser.urlencoded({ extended: true })); // handle URL-encoded data


// import services (payment handling, emails)
require('./services/stripeBilling');
require('./services/nodemailerAfterPayment');
require('./services/nodemailerContactForm');


// import routes - [C][R][D] cycle. No [U]pdating an existing itinerary at this moment.
require('./routes/itineraryCreate')(app);
require('./routes/itineraryRead')(app);
require('./routes/itineraryDelete')(app);
require('./routes/contactUs')(app);


// fetch hidden DB key
const keys = require('./config/keys');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);


// basic test routes
/*
app.get('/', (req, res) => {
    res.send("hello @ index");
});
*/

app.get('/api/test', (req, res) => {
    res.send('hello @ /api/test page');
});


// =================================================================================================
// SERVER CONFIGURATION                                                                           //
// =================================================================================================

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, 'client/build')));

    // look inside react client side for files @ /client/build
    //app.use(express.static('client/build'));

    /*
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });
    */

    // if Express is unable to locate a route, serve index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("NodeJS server started")
});


//package.json
/// previous "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
//"heroku-postbuild": "cd client && npm install && npm run build"