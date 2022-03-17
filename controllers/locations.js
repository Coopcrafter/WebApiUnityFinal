var finalSite = function(req,res){
    res.render('finalSite')
}

var error = function(req,res){
    res.render('error')
}
var index = function(req,res){
    res.render('index')
}
var layout = function(req,res){
    res.render('layout')
}

module.exports = {
    finalSite,
    error,
    index,
    layout
}