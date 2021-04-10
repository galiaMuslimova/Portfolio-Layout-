$(document).ready(function() {
  $('.menu-btn').click(function(event) {
    $('.menu').toggleClass('menu__active');
    $('.menu-btn').toggleClass('menu-btn__active');
    $('.text__rotate').toggleClass('text__rotate__active');
  })
})