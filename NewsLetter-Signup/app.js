const express = require("express");
const bodyParser = require("body-parser");
//const request = require("request");

const app = express();
app.use(express.static("public"));//need to create a public folder and place images and css in there or else server will not read them. since they are static 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname +"/signup.html");

});
app.listen(3000, function(){
    console.log("Server started on port 3000");
});

app.post("/", function(req, res){
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    console.log(req.body.email);
});