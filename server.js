const express = require('express')


const port = 6500
const app = express()



app.set('view engine', 'ejs')

app.use(express.static('public'))


//home page presentations
app.get('/', function(req, res){
    res.render('pages/index')
})

//Mes taches
app.get('/_taches', function(req, res){
    res.render('pages/_taches')
})


app.get('/_taches-acheve', function(req, res){
    res.render('pages/_taches-acheve')
})
app.listen(port, function(){
    console.log("8080 is the magic port")
})

