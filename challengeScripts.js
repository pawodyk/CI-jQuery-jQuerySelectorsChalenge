
//Answers to Selector Challenge

console.log("Answers to selector challange:")

var current = null;

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
