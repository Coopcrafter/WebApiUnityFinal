var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var GameTestSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    score:{
        type:Number
    },
    plays:{
        type:Number
    }
})

module.exports =  mongoose.model('gameTest', GameTestSchema)