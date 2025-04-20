// ======手風琴


$(function () {
  $('.hamburger').click(function () {
    $('.transition').toggleClass('show');
    $(this).toggleClass('active')
    $('.overlay').fadeToggle();
  });
});

$('.overlay').on('click', function(){
  $('.transition').removeClass('show');
  $(this).fadeOut();
});




$(function(){
    $('.mapbtn').click(function(){
      $(this)
        .closest('.first-shop')          // closest是找容器
        .find('.map iframe')             
        .slideToggle(2000, 'easeInOutBack');  
    });
  });
  