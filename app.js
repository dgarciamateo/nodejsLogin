var express = require('express');
var app = express();

var entry = {david:1234,jaime:5678};
var bodyParser = require ("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','ejs');

app.get('/', function (req, res) {
  res.render('index',{});
});

app.post('/login',function(req,res){

  if(entry[req.body.user]){
    if(entry[req.body.user] == req.body.pass){

        res.send('Perfecto');


    }else{

        res.send('La contraseña no es la buena man!');

  }
}else{
  res.send('El usuario no existe man');
}

s
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
