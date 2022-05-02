const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");
let newItems = ["Buy Food", "Cook Food", "Eat Food"];
let workItems =[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    let day = date();
    res.render("list", {listTitle: day, newListItems: newItems, }); //find file list in views folder, send days to equal to days in html file {html value: js value}

});

app.listen(3000, function(){
    console.log("Server started on port 3000");
    
});

app.post("/", function(req, res){
    let Item = req.body.todo;
    if (req.body.list === "Work") {
        workItems.push(Item);
        res.redirect("/work");
    } else {
        newItems.push(Item)
        res.redirect("/");
    }
    //cant do res.render here have to do it above in the day render. so need to redirect to "/"
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});

})

app.post("/work", function(req, res){
    let item = req.body.todo;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function(req, res){
    res.render("about");
});