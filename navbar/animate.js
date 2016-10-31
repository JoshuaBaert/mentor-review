$(document).ready(function() {
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('small');
      $('#logo').addClass('logo-small');
    } else {
      $('.header').removeClass('small');
      $('#logo').removeClass('logo-small');
    }
  });
});
