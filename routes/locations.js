var home = function(req,res){
    res.render('home',{
        post:{
            author:"Matt Smooth",
            image:"https://picsum.photos/500/500?2",
            comments:[]
        },
        post:{
            author:"Jordan Dubreil",
            image:"https://picsum.photos/500/500?2",
            comments:[]
        }
    })
}