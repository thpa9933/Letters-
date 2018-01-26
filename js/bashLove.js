
$('.A1Content').hide();
$('.A2Content').hide();
$('.A3Content').hide();

function main(){

  $('.A1').on('click',function(){
    $('.A1Content').slideToggle(300);
    $('.A1Heading').toggleClass('Active'); //The Active class simply overwrites the the other attributes
  })
  $('.A2').on('click',function(){
    $('.A2Content').slideToggle(300);
    $('.A2Heading').toggleClass('Active');
  })
  $('.A3').on('click',function(){
    $('.A3Content').slideToggle(300);
    $('.A3Heading').toggleClass('Active');
  })
}

$(document).ready(main); //runs the main function when the document has loaded
