$(function() {
  // menu
  $('#nav-icon').click(function() {
    $(this).toggleClass('open');
    $('#menu').toggle();
    $("#backdrop").toggle();
  });
  $('.menu-text').click(function() {
    $('#nav-icon').removeClass('open');
    $('#menu').hide();
    $("#backdrop").hide();
  });
});
