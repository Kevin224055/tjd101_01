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





//   $(document).ready(function() {
//     $('.transition > li > a').on('click', function(e) {
//         // 僅當此主選單項目有 .side 子選單時，才阻止跳轉
//         var $side = $(this).siblings('.side');
        
//         if ($side.length > 0 && window.matchMedia("(max-width: 820px)").matches) {
//             e.preventDefault(); // 阻止跳轉（只有主選單且有子選單才阻止）
            
//             // 收起其他子選單
//             $('.side').not($side).removeClass('active').slideUp(300);
            
//             // 切換當前子選單
//             $side.toggleClass('active').slideToggle(300);
//         }
//     });
// });



// $(document).ready(function() {
//     $('.transition > li > a').on('click', function(e) {
//       var $side = $(this).siblings('.side');
  
//       // 只有在手機尺寸 (<=820px) 且有子選單時才阻止跳轉
//       if ($side.length > 0 && window.matchMedia("(max-width: 820px)").matches) {
//         e.preventDefault(); // 阻止 a 跳轉
  
//         // 收起其他子選單
//         $('.side').not($side).removeClass('active').slideUp(300);
  
//         // 切換目前子選單的展開狀態
//         $side.toggleClass('active').slideToggle(300);
//       }
//     });
//   });
  

$(document).ready(function () {
    $('.transition > li > a').on('click', function (e) {
      var $side = $(this).siblings('.side');
  
      // 確認是否為小於 820px 的畫面且有子選單
      if ($side.length > 0 && window.matchMedia("(max-width: 820px)").matches) {
        e.preventDefault(); // 阻止跳轉
  
        // 如果這個是打開的，就收起來
        if ($side.hasClass('active')) {
          $side.removeClass('active');
        } else {
          // 收起其他的
          $('.side').removeClass('active');
  
          // 展開這個
          $side.addClass('active');
        }
      }
    });
  });
  





  
  
