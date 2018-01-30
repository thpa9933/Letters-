
function main(){
  $('.leftHeart').on('mouseover',function(){
    console.log('it works');
    $('.leftHeart').toggleClass('leftMove');
  })
  $('.rightHeart').on('mouseover',function(){
    console.log('it works');
    $('.rightHeart').toggleClass('rightMove');
  })
}

$(document).ready(main); //runs the main function when the document has loaded
