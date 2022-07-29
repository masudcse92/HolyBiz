// Owl carousel slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// loading 
$(document).ready(function(){
$(".button").click(function(){
    var name = $(this).attr("data-filter");
    if(name == "all"){
        $(".filter").show("2000");
    }
    else {
        $(".filter").not("."+name).hide("2000");
        $(".filter").filter("."+name).show("2000");
    }
});
});

window.addEventListener("load", function(){
    const loading = document.querySelector("loading");
    console.log(loading);
});


// aos animation
AOS.init({
    duration: 1200, // values from 0 to 3000, with step 50ms
});