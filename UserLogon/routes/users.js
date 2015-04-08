var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var debug = require('debug')('UserLogon:server');
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var _db;
var url = 'mongodb://10.34.64.53:27017/demos';
MongoClient.connect(url, function (err, db) {
    assert.equal(err, null);
    _db = db;
    console.log("Connected to server:", url);
});

getDbUsers = function (callback) {
    var collection = _db.collection('users');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found %i users.", docs.length);
        console.dir(docs);
        callback && callback(docs);
    });
};

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/:id', function (req, res, next) {
    res.send(req.params);
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
