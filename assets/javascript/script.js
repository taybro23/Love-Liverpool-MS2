// places of interest buttons

$("#fombtn1").click(function(){
   $("#fomt1").toggle(); 
});
$("#fombtn2").click(function(){
   $("#fomt2").toggle(); 
});
$("#fombtn3").click(function(){
   $(".fomt3").toggle(); 
});


// map buttons

$("#placesbtn").click(function(){
    $(".places-li").toggle();
})

$("#staybtn").click(function(){
    $(".stay-li").toggle();
})

$("#restbtn").click(function(){
    $(".restaurant-li").toggle();
})

$("#shopbtn").click(function(){
    $(".shop-li").toggle();
})
