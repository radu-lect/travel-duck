
// console.log(window.location);
// $("#discoveri").on('click', function(){
//      window.location = "C:/Informatica/travel-duck/discovery.html";    
// });

// console.log(window.location);

// if (window.location = "C:/Informatica/travel-duck/discovery.html"){
//     console.log("discovery")
// }
// else if(window.location = "C:/Informatica/travel-duck/tara.html" ){
//     console.log("tara")
// }

     // window.location = "C:/Informatica/travel-duck/discovery.html";    



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

    $(this).addClass('permahover');
    // $(this).toggleClass('permahover');
   

    

});
    $("#germani").on('mouseenter',function() {
    $(acestaimg).removeClass('img-permahover');
    $('.back-txt').addClass('none');
 
    $('#img-1-show').addClass('img-permahover');


     } );

     $("#italy").on('mouseenter',function() {
    $(acestaimg).removeClass('img-permahover');
    $('.back-txt').addClass('none');
    
 
    $('#img-2-show').addClass('img-permahover');


     } );
     $("#spain").on('mouseenter',function() {
    $(acestaimg).removeClass('img-permahover');
    $('.back-txt').addClass('none');
    
 
    $('#img-3-show').addClass('img-permahover');


     } );

     $("#france").on('mouseenter',function() {
    $(acestaimg).removeClass('img-permahover');
    $('.back-txt').addClass('none');
    
 
    $('#img-4-show').addClass('img-permahover');


     } );


// $("#remove-1").on('mouseenter',function() {
//     $(acestaimg).removeClass('img-permahover');
 
//     $('#img-1-show').addClass('img-permahover');


//      } );

// $("#remove-2").on('mouseenter',function() {
//     $(acestaimg).removeClass('img-permahover');
 
//     $('#img-2-show').addClass('img-permahover');


//      } );
// $("#remove-3").on('mouseenter',function() {
//     $(acestaimg).removeClass('img-permahover');
 
//     $('#img-3-show').addClass('img-permahover');


//      } );
// $("#remove-4").on('mouseenter',function() {
//     $(acestaimg).removeClass('img-permahover');
 
//     $('#img-4-show').addClass('img-permahover');


//      } );
// $("#remove-5").on('mouseenter',function() {
//     $(acestaimg).removeClass('img-permahover');
 
//     $('#img-5-show').addClass('img-permahover');


//      } );
// $("#remove-6").on('mouseenter',function() {
//     $(acestaimg).removeClass('img-permahover');
 
//     $('#img-6-show').addClass('img-permahover');


//      } );

// scroll btn



$( "#target" ).on( "submit", function( event ) {
  // alert( "Handler for `submit` called." );
$("input[type=text]").val('');
  event.preventDefault();
});

$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() > 100){
        $('#back-up').addClass( "back-up");
    }
 });
});

$(document).ready(function(){
    var x = $(window).scrollTop();

  $( "#trans-down" ).click(function() {
    // var y = $(window).scrollTop();
    $(window).scrollTop(2000);
    // console.log("1");
  });
  $( "#tipuri-down" ).click(function() {
    // var y = $(window).scrollTop();
    $(window).scrollTop(1320);
    // console.log("1");
  });
  $( "#tarii-down" ).click(function() {
    // var y = $(window).scrollTop();
    $(window).scrollTop(2620);
    // console.log("1");
  });


$( "#back-up" ).click(function() {
    // var y = $(window).scrollTop();
    $(window).scrollTop(0);
    // console.log("1");
  });


$( "#arrow-down" ).click(function() {
    // var x = $(window).scrollTop();
    $(window).scrollTop(740);
  });
$( "#arrow-down2" ).click(function() {
    // var x = $(window).scrollTop();
    $(window).scrollTop(500);
  });

$( "#discoveri" ).click(function() {
    // var x = $(window).scrollTop();
    $(window).scrollTop(3000);
  });
  
});



// left right

