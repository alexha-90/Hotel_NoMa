if (process.env.NODE_ENV === "production") {
    console.log('**************DOES THIS READ?**********');
    module.exports = require("./prod.js");
} else {
    module.exports = require("./dev.js");
}