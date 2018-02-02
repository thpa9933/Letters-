
// function main(){
//   $('.leftHeart').on('mouseover',function(){
//     console.log('it works');
//     $('.leftHeart').toggleClass('leftMove');
//     $('.leftDagger').toggleClass('leftDaggerActive');
//     $('.bodyP').toggleClass('bodyPActive');
//   })
//   $('.rightHeart').on('mouseover',function(){
//     console.log('it works');
//     $('.rightHeart').toggleClass('rightMove');
//     $('.rightDagger').toggleClass('rightDaggerActive');
//   })
// }
//
// $(document).ready(main); //runs the main function when the document has loaded

  $('.bodyP').hide();
function activate(){
  $('.leftHeart').toggleClass('leftMove');
  $('.leftDagger').toggleClass('leftDaggerActive');
  $('.bodyP').show();
  $('.bodyP').toggleClass('bodyPActive');
  $('.rightHeart').toggleClass('rightMove');
  $('.rightDagger').toggleClass('rightDaggerActive');
}
