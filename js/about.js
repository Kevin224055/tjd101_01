// ======手風琴
// $(function(){
//     $('.mapbtn').click(function(){
     
//       $('.map iframe').slideToggle(2000, 'easeInOutBack')
//       // $('p').slideToggle(2000)
//     })
//   })

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
        .closest('.first-shop')          // 找到該店家容器
        .find('.map iframe')             // 找它底下的 iframe
        .slideToggle(2000, 'easeInOutBack');  // 執行動畫
    });
  });
  