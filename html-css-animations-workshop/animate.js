$(document).ready(function() {
  $('.trigger').on('click', function() {
    $(this).toggleClass('clicked');
  });

  $('.box2').on('click', function() {
    $('.box1').addClass('show');
  });

});
