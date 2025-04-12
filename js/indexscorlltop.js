// $(document).ready(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 200) {
//             $('.gotop').fadeIn();
//         } else {
//             $('.gotop').fadeOut();
//         }
//     });

//     $('.gotop').click(function(e) {
//         e.preventDefault();
//         $('html, body').animate({
//             scrollTop: 0
//         }, 500);
//     });
// });



$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >200){
            $('.gotop').fadeIn();
        }else{
            $('.gotop').fadeOut();
        }
    
})

$('.gotop').click(function(e){
e.preventDefault();
$('html ,body').animate({
    scrollTop:0
},500);
})
});






//   $(function () {
//     $('.hamburger').click(function () {
//       $('nav ul').toggleClass('show');
//     });
//   });





// $(function(){
//     $('.hamburger').click(function(){
//         // $(this).addClass('active')
//         $(this).toggleClass('active')
//     })
// })



$(function () {
    $('.hamburger').click(function () {
      $('.transition').toggleClass('show');
    });
  });






  $(document).ready(function() {
    $('.transition li a').on('click', function(e) {
        // 檢查螢幕寬度是否 ≤ 820px
        if (window.matchMedia("(max-width: 820px)").matches) {
            e.preventDefault(); // 在行動版阻止跳轉
        }

        var $side = $(this).siblings('.side');
        
        // 收起其他子選單
        $('.side').not($side).removeClass('active').slideUp(300);
        
        // 切換當前子選單
        $side.toggleClass('active').slideToggle(300);
    });
    
});







  
  
