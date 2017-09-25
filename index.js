const express = require('express');
const mongoose = require('mongoose');

//const keys = require('./config/keys');

const app = express();

// fetch hidden DB key
//mongoose.connect(keys.mongoURI);

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