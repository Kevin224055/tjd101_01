// $(function () {
//     $('.hamburger').click(function () {
//       $('.transition').toggleClass('show');
//     });
//   });



//   $(function(){
//     $('.hamburger').click(function(){
//               // $(this).addClass('active')
//               $(this).toggleClass('active')
//           })
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



$(document).ready(function () {
    
  
    $(document).on('click', '.fa-heart', function () {
        $(this).toggleClass('red');
      });

      
  // 導覽列
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




    window.addEventListener('load', function () {
 

      const items = document.querySelectorAll('.conectproduct li');
      const leftBtn = document.querySelector('.cl');
      const rightBtn = document.querySelector('.cr');
    
      let currentIndex = 0; // 預設從第 0 個開始
    
      function updateDisplay() {
        items.forEach((item, index) => {
          if (index >= currentIndex && index < currentIndex + 5) {
            item.style.display = 'flex'; // 顯示的三個
          } else {
            item.style.display = 'none'; // 其他隱藏
          }
        });
      }
    
      leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateDisplay();
        }
      });
    
      rightBtn.addEventListener('click', () => {
        if (currentIndex < items.length - 5) {
          currentIndex++;
          updateDisplay();
        }
      });
    
      // 初始顯示
      updateDisplay();
    
    
    
    
    });



    // 點擊顯示資訊
window.addEventListener('load',function(){
  let btn1 = document.getElementById('b1')
  let btn2 = document.getElementById('b2')
  let btn3 = document.getElementById('b3')
  let div1 = document.getElementsByClassName('ii1')
  let div2 = document.getElementsByClassName('ii2')
  let div3 = document.getElementsByClassName('ii3')
  btn1.addEventListener('click',function(){
    div1[0].style.display = 'block';
    div2[0].style.display = 'none';
    div3[0].style.display = 'none';
  })

  btn2.addEventListener('click',function(){
    div1[0].style.display = 'none';
    div2[0].style.display = 'block';
    div3[0].style.display = 'none';
  })

  btn3.addEventListener('click',function(){
    div1[0].style.display = 'none';
    div2[0].style.display = 'none';
    div3[0].style.display = 'block';
  })
})








