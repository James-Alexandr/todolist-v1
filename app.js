const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){

   var today = new Date();
   var currentDay = today.getDate();
   var day = "";
  // res.sendFile(__dirname + "/index.html");
 

if (currentDay === 6 || currentDay ===0){
  day ="Weekend";
  res.render('list', {kindOfDay: day});
}else{
  day="Weekday";
  res.render('list', {kindOfDay: day});
}


});

app.post("/", function(req, res){


})

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
