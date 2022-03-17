var GameTest = require('../models/GameTest')


module.exports.getAllGameData = function(req,res){
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