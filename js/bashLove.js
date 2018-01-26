
function main(){
  $('.wrapper').hide();
  $('.wrapper').fadeIn(1000);
  $('.A1Content').hide();
  $('.A1').on('click',function(){
    $('.A1Content').slideToggle(500);
  })
}

$(document).ready(main); //runs the main function when the document has loaded
