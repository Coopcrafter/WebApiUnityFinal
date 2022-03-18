var GameTest = require('../models/GameTest')
var Review = require('../models/review.model')

module.exports.getAllGameData = function(req,res){
    GameTest.find().then(function(gamedata){
      console.log(gamedata)
      res.json(gamedata)
    })
}

module.exports.readReviewsAll = function(req, res){
  debug('Getting all reviews')
  console.log('Getting all reviews')
  GameTest.find().exec().then(function(results){
      sendJSONresponse(res, 200, results)
  }).catch(function(err){
      sendJSONresponse(res, 404, err)
  })
}

module.exports.getAllGameDataOnline = function(req,res){
  GameTest.find().then(function(gamedata){
    console.log(gamedata)
    res.json(gamedata)
  })
}

module.exports.getOneByName = function(req,res){
  console.log("Selected by myName!", req.query.name);
  GameTest.findOne({"myName":req.query.name}).then(function(gamedata){
    console.log(gamedata)
    res.json(gamedata)
  })
}

module.exports.deleteEntry = function(req, res){
  console.log("Screen Name to delete: ", req.query.myScreenName);
  GameTest.deleteOne({"myScreenName":req.query.myScreenName}).then(function(){
    console.log("Entry deleted")
  }).catch(function(err){
    console.log(err)
  })
}

module.exports.updateEntry = function(req, res){
  console.log("Screen name to update: ", req.body.myScreenName);
  
  GameTest.updateOne(
    {username: req.body.username},
    {username: req.body.username,
    score:req.body.score,
    plays:req.body.plays
  }
  ).catch(function(err){
    console.log(err)
  })
}

module.exports.saveEntry = function(req,res){
    var errors = []
    
    if(req.body.username == ""){
      errors.push({text:"Username Not added"})
    }
    if(req.body.myScore == 0){
      errors.push({text:"No Score Added"})
    }
    if(req.body.plays == 0){
      errors.push({text:"No Plays Added"})
    }
    //if there are errors don't validate if there aren't log and save data
    if(errors.length > 0){
      console.log({
        errors:errors
      })
    }else{
      console.log("Hello from Unity Post ", req.body)
      var gameTestData = {
        username:req.body.username,
        score:req.body.score,
        plays:req.body.plays
      }
      console.log(gameTestData)

      new GameTest(gameTestData).save().then(function(){
        console.log("Data Saved")
      }).catch(function(err){
        console.log(err)
      })
    }
  }

function sorting(array)
{
    console.log("reached sort")
    data = Array()
    foreach(i in array)
    {
        data[i] = array[i] > array[i+1]
        console.log(data[i])
    }
    console.log("Sorting...")
    return data
}

module.exports.sort = (req, res) => {
    console.log(req.query.column)
    console.log(req.query.sort)
    console.log("Reached module.exports.sort")
    GameTest.find().then((gameTest) => {
        if(req.query.sort === 'ascending')
        {
            //sort employees by column in query
            switch (req.query.column) {
                case column = "score":
                    gameTest.sorting(function(a, b) {
                        return a.score.localeCompare(b.score)
                    });
                    break;
            }
        }
        if(req.query.sort === 'descending')
        {
            //sort employees by column in query
            switch (req.query.column) {
                case column = "score":
                    gameTest.sorting(function(a, b) {
                        return b.score.localeCompare(a.score)
                    });
                    break;
            }
        }

        res.json({gameTest})
        console.log("Finished Sorting...")
    })
}