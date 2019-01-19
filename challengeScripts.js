
//Answers to Selector Challenge

console.log("Answers to selector challange:")

var arr =[ 
    $("img"), 
    $(".card_image"), 
    $("#my_footer"),
    $("#my_footer p"),
    $(":header"),
    $(":first"),
    $("div:last"),
    $("img:last"),
    $("[href]")]


for (var i of arr) {
    console.log(i);
}

// Challenge 1

console.log("Code for Chalange 1 executes...");

$("p").text("Hello World");

//console.log($("body").html());

//Challange 2

console.log("Code for Chalange 2 executes...");

$("p").append(" <span>lorem ipsum</span>");
$("a").remove();
$("div.card").text("");

//console.log($("body").html());
