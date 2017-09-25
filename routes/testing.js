const express   = require('express');
const router    = express.Router();

router.get('/page1', function(req, res, next) {
    res.render('testing', {title: 'Express'});
});

module.exports = router;