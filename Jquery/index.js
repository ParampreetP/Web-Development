
//$("h1").css("color", "blue"); //css(property, value)
//console.log($("h1").css("color") - displays color
//2 propertys in css parameter sets value, 1 property gets value

//$("h1.title") - h1 with id title
//$("h1") - all h1s

//$("h1").addClass("big-title"); //add css class

//$("h1").text("Bye");

//console.log($("img").attr("src")); //prints dummy.png on console
//$("img").attr("src", "test.png"); //sets img src to test.png
//$("a").attr("href", "https://www.yahoo.com");



//instead of using a for loop to select all buttons we can use the click listener
//$("button").click(function() {
 //   $("h1").css("color", "purple");
//})



//we can check for keys too

//$("body").keypress(function(event){
//    $("h1").text(event.key); //sets h1 as the key being entered by the user
//})

//can use .on too
//$("body").on("click", function(){
//   $("h1").css("color", "purple");
//})

//adding and removing elements in Jquery
//use before, after, prepend, and append
//$("h1").before("<button>New</button>")

//Animations in jquery
//.hide
//$("button").click(function() {
//    $("h1").toggle();
//})
//toggle will hide and then show when clicked
//$("button").click(function() {
//    $("h1").toggle();
//})
//fadeOut will fade it. fadeIn will show while fading
//fadeToggle
//$("button").click(function() {
  //  $("h1").fadeToggle();
//})
//slideToggle as well to slide
//$("button").click(function() {
//    $("h1").slideToggle();
//})

//.animate() set custom css.. NOTE Can not to color etc bc needs to be a number value
$("button").click(function() {
    $("h1").animate({opacity: 0.5});
})

//can chain .slideUp().slideDown().animate({opacity: 0.5})