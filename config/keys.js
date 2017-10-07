if (process.env.NODE_ENV === "production") {
    console.log('******** in production environment ********');
    //module.exports = require("./prod.js");
    module.exports = {
        mongoURI: process.env.MONGO_URI,
        stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        stripeSecretKey: process.env.STRIPE_SECRET_KEY,
        emailPassword: process.env.EMAIL_PASSWORD
    };

} else {
    console.log('******** in development environment ********');
    module.exports = require("./dev.js");
}