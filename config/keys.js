if (process.env.NODE_ENV === "production") {
    console.log('******** obtaining keys for production environment ********');
    module.exports = require("./prod.js");

} else {
    console.log('******** obtaining keys for development environment ********');
    module.exports = require("./dev.js");
}