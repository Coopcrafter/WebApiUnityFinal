var debug = require('debug')('demo')
var Review = require('../models/review.model')
var GameTest = require('../models/GameTest')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function sendJSONresponse(res, status, content){
    res.status(status)
    res.json(content)
}

module.exports.readReviewsAll = function(req, res){
    debug('Getting all reviews')
    console.log('Getting all reviews')
    Review.find().exec().then(function(results){
        sendJSONresponse(res, 200, results)
    }).catch(function(err){
        sendJSONresponse(res, 404, err)
    })
}