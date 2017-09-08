const express = require('express');
const mongoose = require('mongoose');
const app = express();

const keys = require('./config/keys');

// fetch hidden DB key
mongoose.connect(keys.mongoURI);

app.get('/', (req, res) => {
    res.send("hello");
});


//require("./routes/...")(App);

// =================================================================================================
// SERVER CONFIGURATION
// =================================================================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started on port 5000")
});