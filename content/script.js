// light dark mode
// var toggle = document.getElementById("theme-toggle");


// var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
// if (storedTheme)
//     document.documentElement.setAttribute('data-theme', storedTheme)


// toggle.onclick = function() {
//     var currentTheme = document.documentElement.getAttribute("data-theme");
//     var targetTheme = "light";

//     if (currentTheme === "light") {
//         targetTheme = "dark";
//     }

//     document.documentElement.setAttribute('data-theme', targetTheme)
//     localStorage.setItem('theme', targetTheme);
// };


// arrow btn


jQuery(function($){
   $( '#arrow-btn' ).click(function(){
   $('#toggle-arrow').toggleClass('toggle-arrow-after')
   })
})





// edit function (tarii)
let acesta = document.getElementsByClassName("permahover");
let acestaimg = document.getElementsByClassName("img-permahover");

$(".edit").on('mouseenter',function() {

    $(acesta).removeClass('permahover');
    // $(acestaimg).removeClass('img-permahover');
    // $('img',this).addClass('img-permahover');
    $(this).addClass('permahover');
   

    

});


$("#remove-1").on('mouseenter',function() {
    $(acestaimg).removeClass('img-permahover');
 
    $('#img-1-show').addClass('img-permahover');


     } );

$("#remove-2").on('mouseenter',function() {
    $(acestaimg).removeClass('img-permahover');
 
    $('#img-2-show').addClass('img-permahover');


     } );
$("#remove-3").on('mouseenter',function() {
    $(acestaimg).removeClass('img-permahover');
 
    $('#img-3-show').addClass('img-permahover');


     } );
$("#remove-4").on('mouseenter',function() {
    $(acestaimg).removeClass('img-permahover');
 
    $('#img-4-show').addClass('img-permahover');


     } );
$("#remove-5").on('mouseenter',function() {
    $(acestaimg).removeClass('img-permahover');
 
    $('#img-5-show').addClass('img-permahover');


     } );
$("#remove-6").on('mouseenter',function() {
    $(acestaimg).removeClass('img-permahover');
 
    $('#img-6-show').addClass('img-permahover');


     } );

// scroll btn
$(document).ready(function(){
  
  $( "#arrow-down" ).click(function() {
    var x = $(window).scrollTop();
    $(window).scrollTop(x+780);
  });
});


