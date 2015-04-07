var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var debug = require('debug')('UserLogon:server');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/**
 * Display create new user form.
 */
router.get('/create', function (req, res, next) {
    res.render('newUser');
});

/**
 * Handle post data of create new user.
 */
router.post('/', function (req, res, next) {
    if (!req.body) return res.sendStatus(400);
    debug(req.body);
    res.json(req.body);
});

module.exports = router;
