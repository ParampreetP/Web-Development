const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){
    //console.log(req.body.cityName);
    const query = req.body.cityName;
    const apiKey = "ce7f7ef8f716b80ab26f7951a353db38";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey;
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            console.log(weatherDesc);
            res.write("<h1>Weather in your city is "+ weatherDesc + "</h1>");
            res.write("<h1>Temp in your city is "+ temp + "</h1>");
            res.send(); //can have only one send
        });
    });
});
app.listen(3000, function(){
    console.log("Server is running on port 3000")
})