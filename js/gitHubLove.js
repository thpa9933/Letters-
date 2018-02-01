

// function main(){
// $('.circle1').toggleClass('active');
// }
$('.insidecircle1').hide();

setTimeout(function(){
$('.circle1').toggleClass('active');
$('.circle2').toggleClass('active');
$('.circle3').toggleClass('active');
$('.circle4').toggleClass('active');
}, 3600);


function change(x){
  if(x == 1){
    $('.insidecircle1').show().slideDown(500);
  }
}

//$(document).ready(main); //runs the main function when the document has loaded
