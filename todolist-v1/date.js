
module.exports = getDate;

function getDate(){
    let today = new Date();
    let currentDay = today.getDay();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
}

//can also do this to make it shorter 
exports.getDay =function(){
    let today = new Date();
    let options = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);
}