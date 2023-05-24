// baza de date
// var xhr2 = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
// xhr2.open('get', 'tara.html', true);
// xhr2.onreadystatechange = function() {
//     if (xhr2.readyState == 4 && xhr2.status == 200) { 
// grabData();
        
//     } 
// }
// xhr2.send();

function grabData(){

let productsGrid = document.getElementById('products-grid');
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https:my-json-server.typicode.com/radu-lect/travel-duck';
// https:github.com/radu-lect/travel-duck
// https:github.com/radu-lect/travel-duck.git
//verificarea prin punerea in browser
// 'https://my-json-server.typicode.com/#nume/#proiect_nume'

xhr.open('GET', url+'/romania');
xhr.responseType = 'json';

xhr.onload = function(){

    let products = xhr.response;
    //ce adaugam pe pagina
    productsGrid.innerHTML = null;
    products.forEach(p=>{
        productsArray.push(p);
        let pElem = document.createElement('div');
        pElem.classList.add('product');
        pElem.innerHTML=`
                      <div>
                            <h2 class="product-name">${p.name}</h2>
                            
                            <div id="product-descriere">
                            <p> Capitala: ${p.capitala}</p>
                            <p> Limba: ${p.limba}</p>
                            <p> Bani: ${p.bani}</p>
                            <p> Populația: ${p.population}</p>
                            <p> Zona: ${p.zona}</p>
                            <p> Time: ${p.travel_time}</p>
                        
                      </div>      
                            
                        `;
                    productsGrid.append(pElem);

    })
}
xhr.send();
}


//      $(document).ready(function(){
// console.log("merge 1");
//       const currentUrl = window.location.href;
// console.log(currentUrl);
// if (currentUrl == "file:///C:/Informatica/travel-duck/tara.html") {
// grabData();

// console.log("merge 3");
// }
// });


// $('#romania, #germania').click(function () {
//    if (this.id == 'romania') {
// console.log("rom");

//    }
//    else if (this.id == 'germania') {
//       alert('Submit 2 clicked');
//    }
// });


// }
//         $("#romania").on("click",function(){

//  seeTara();
//         });


      // grabData(); 

// $(document).ready(function (e) {

//     $(".qololbl").click(function(){
//         alert("Hi");
//      });
     
//      $('.qololbl').click();
// });
// $("#romania").trigger( "click" , function(){
// console.log("merge 3");
    
//     grabData();
// });

// baza de date

// "photo_url": "https://raw.githubusercontent.comradu-lect/travel-duck/main/img/users2.png",






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
    $(window).scrollTop(x+720);
  });
});


// left right

