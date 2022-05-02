const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.sendFile(__dirname +"/index.html");


});
app.post("/", function(req, res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("Result is" + result);

});


app.get("/bmicalculator",function(req, res){
    res.sendFile(__dirname +"/bmiCalculator.html");

});

app.post("/bmicalculator", function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.Height);
    let bmi = (weight)/(height*height);
    res.send("BMI is" + bmi);

});
app.listen(3000, function(){
    console.log("Server started on port 3000");
});