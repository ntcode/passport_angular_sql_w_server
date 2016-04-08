var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/views/home.html',
        failureRedirect: '/views/failure.html'
    })
);

router.get("/*", function(req, res, next){
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
