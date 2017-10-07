if (process.env.NODE_ENV === "production") {
    console.log('******** in production environment ********');
    module.exports = require("./prod.js");
} else {
    console.log('******** in development environment ********');
    module.exports = require("./dev.js");
}