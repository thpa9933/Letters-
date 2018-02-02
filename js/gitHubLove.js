
$('.insidecircle1Active').hide();

setTimeout(function(){
$('.circle3').toggleClass('active');
}, 3600);

setTimeout(function(){
$('.circle2').toggleClass('active');
}, 3900);

setTimeout(function(){
$('.circle4').toggleClass('active');
}, 4200);

setTimeout(function(){
$('.circle1').toggleClass('active');
}, 4500);

setTimeout(function(){
  console.log('it words');
$('.content5').toggleClass('go');
}, 700);

setTimeout(function(){
$('.Links').toggleClass('LinksGo');
}, 5000);



var current = 0;
function change(x){
  switch(x){
    case 1:
      if(current == 1){
        current = 0;
        $('.content1').css("opacity","0");
        $('.content5').css("opacity","1");
      }
      else{
        current = 1;
        $('.content1').css("opacity","1");
        $('.content2').css("opacity","0");
        $('.content3').css("opacity","0");
        $('.content4').css("opacity","0");
        $('.content5').css("opacity","0");
      }
      break;

    case 2:
      if(current == 2){
        current = 0;
        $('.content2').css("opacity","0");
        $('.content5').css("opacity","1");
      }
      else{
        current = 2;
        $('.content1').css("opacity","0");
        $('.content2').css("opacity","1");
        $('.content3').css("opacity","0");
        $('.content4').css("opacity","0");
        $('.content5').css("opacity","0");
      }
      break;

    case 3:
      if(current == 3){
        current = 0;
        $('.content3').css("opacity","0");
        $('.content5').css("opacity","1");
      }
      else{
        current = 3;
        $('.content1').css("opacity","0");
        $('.content2').css("opacity","0");
        $('.content3').css("opacity","1");
        $('.content4').css("opacity","0");
        $('.content5').css("opacity","0");
      }
      break;

    case 4:
      if(current == 4){
        current = 0;
        $('.content4').css("opacity","0");
        $('.content5').css("opacity","1");
      }
      else{
        current = 4;
        $('.content1').css("opacity","0");
        $('.content2').css("opacity","0");
        $('.content3').css("opacity","0");
        $('.content4').css("opacity","1");
        $('.content5').css("opacity","0");
      }
      break;
  }
}
