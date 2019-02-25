var express = require('express');
var app = express();

var entry = {david:1234,roger:5678};
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


});

app.get('/api/login/:user/:pass',function(req,res){

  if(entry[req.params.user]){
    if(entry[req.params.user] == req.params.pass){
        var usuario = {usuario:req.params.user,password:req.params.pass};
        console.log("uee")
        res.render('users',{usuario:JSON.stringify(usuario)});

    }else{

        res.send('La contraseña no es la buena man!');

  }
}else{
  res.send('El usuario no existe man');
}



});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
