const passport = require('passport');

module.exports = (app) => {
    app.get('/test', (req, res) => {
        res.send("testpage");
    });
};