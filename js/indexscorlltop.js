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
  countdownTo('2025-05-01 23:59:59')

  $('.fa-heart').on('click', function () {
    $(this).toggleClass('red');
  });

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
  



//＝＝＝＝＝＝＝＝＝ 倒數計時
function countdownTo(targetDate){
  let countDownDate = new Date(targetDate)
  let timeout = document.getElementById('timeclock')

  let timer = setInterval(() => {
      let now = new Date()
      let distance = countDownDate - now

      let days = Math.floor(distance / (24 * 60 * 60 * 1000))
      let hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))
      let minutes = Math.floor(distance % (60 * 60 * 1000) / (60 * 1000))
      let seconds = Math.floor(distance % (60 * 1000) / 1000)

      timeout.innerText = `${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`

      if(distance < 0){
          clearInterval(timer)
          timeout.innerText = `倒數時間到!`
      }

  }, 1000)
}


// 愛心變色

// $(function () {
//   document.getElementsByClassName('fa-heart').addEventListener('click', function () {
//     this.classList.toggle('red');
//   });
//      });




// slider上
window.addEventListener('load', function () {
  const images = document.querySelectorAll(".slider .image");
  const leftBtn = document.querySelector(".slider .ileft");
  const rightBtn = document.querySelector(".slider .iright");
  let currentIndex = 0;
  let autoplayInterval;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  // 設定 2 秒自動切換
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 2000); // 每兩秒切換
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // 手動控制時，暫停自動播放再重新啟動
  rightBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoplay();
  });

  leftBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoplay();
  });

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // 初始化
  showSlide(currentIndex);
  startAutoplay();
});




// slider 下
// window.addEventListener('load', function () {
 

//   const items = document.querySelectorAll('.Timeph li');
//   const leftBtn = document.querySelector('.dl');
//   const rightBtn = document.querySelector('.dr');

//   let currentIndex = 0; // 預設從第 0 個開始

//   function updateDisplay() {
//     items.forEach((item, index) => {
//       if (index >= currentIndex && index < currentIndex + 4) {
//         item.style.display = 'flex'; // 顯示的三個
//       } else {
//         item.style.display = 'none'; // 其他隱藏
//       }
//     });
//   }

//   leftBtn.addEventListener('click', () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateDisplay();
//     }
//   });

//   rightBtn.addEventListener('click', () => {
//     if (currentIndex < items.length - 3) {
//       currentIndex++;
//       updateDisplay();
//     }
//   });

//   // 初始顯示
//   updateDisplay();

// });

  //=========2
// window.addEventListener('load', function () {
//   const items = document.querySelectorAll('.Timeph li');
//   const leftBtn = document.querySelector('.dl');
//   const rightBtn = document.querySelector('.dr');

//   let currentIndex = 0;

//   function getVisibleCount() {
//     return window.innerWidth <= 820 ? 2 : 3;
//   }

//   function updateDisplay() {
//     const visibleCount = getVisibleCount();
//     items.forEach((item, index) => {
//       if (index >= currentIndex && index < currentIndex + visibleCount) {
//         item.style.display = 'flex';
//       } else {
//         item.style.display = 'none';
//       }
//     });
//   }

//   function handleResize() {
//     // 確保 currentIndex 不會超過邊界
//     const visibleCount = getVisibleCount();
//     if (currentIndex > items.length - visibleCount) {
//       currentIndex = Math.max(0, items.length - visibleCount);
//     }
//     updateDisplay();
//   }

//   leftBtn.addEventListener('click', () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateDisplay();
//     }
//   });

//   rightBtn.addEventListener('click', () => {
//     const visibleCount = getVisibleCount();
//     if (currentIndex < items.length - visibleCount) {
//       currentIndex++;
//       updateDisplay();
//     }
//   });

//   window.addEventListener('resize', handleResize);

//   // 初始化
//   updateDisplay();
// });





//======3
// window.addEventListener('load', function () {
//   const items = document.querySelectorAll('.Timeph li');
//   const leftBtn = document.querySelector('.dl');
//   const rightBtn = document.querySelector('.dr');

//   let currentIndex = 0;

//   function getVisibleCount() {
//     return window.innerWidth <= 820 ? 2 : 3;
//   }

//   function updateDisplay() {
//     // ❗ 在 440px 以下，全部顯示，交由 CSS 橫向滑動控制
//     if (window.innerWidth < 440) {
//       items.forEach(item => {
//         item.style.display = 'flex';
//       });
//       leftBtn.style.display = 'none';
//       rightBtn.style.display = 'none';
//       return;
//     }

//     const visibleCount = getVisibleCount();

//     // 顯示控制
//     items.forEach((item, index) => {
//       if (index >= currentIndex && index < currentIndex + visibleCount) {
//         item.style.display = 'flex';
//       } else {
//         item.style.display = 'none';
//       }
//     });

//     // 顯示左右按鈕
//     leftBtn.style.display = 'block';
//     rightBtn.style.display = 'block';
//   }

//   function handleResize() {
//     const visibleCount = getVisibleCount();

//     if (window.innerWidth < 440) {
//       currentIndex = 0;
//       updateDisplay();
//       return;
//     }

//     if (currentIndex > items.length - visibleCount) {
//       currentIndex = Math.max(0, items.length - visibleCount);
//     }
//     updateDisplay();
//   }

//   leftBtn.addEventListener('click', () => {
//     if (window.innerWidth < 440) return;
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateDisplay();
//     }
//   });

//   rightBtn.addEventListener('click', () => {
//     if (window.innerWidth < 440) return;
//     const visibleCount = getVisibleCount();
//     if (currentIndex < items.length - visibleCount) {
//       currentIndex++;
//       updateDisplay();
//     }
//   });

//   window.addEventListener('resize', handleResize);
//   updateDisplay(); // 初始化
// });



// window.addEventListener('load', function () {
//   const items = document.querySelectorAll('.Timeph li');
//   const leftBtn = document.querySelector('.dl');
//   const rightBtn = document.querySelector('.dr');

//   let currentIndex = 0;

//   function getVisibleCount() {
//     if (window.innerWidth < 440) return 4;
//     if (window.innerWidth <= 820) return 2;
//     return 3;
//   }

//   function updateDisplay() {
//     const visibleCount = getVisibleCount();

//     items.forEach((item, index) => {
//       if (index >= currentIndex && index < currentIndex + visibleCount) {
//         item.style.display = 'flex';
//       } else {
//         item.style.display = 'none';
//       }
//     });

//     leftBtn.style.display = 'block';
//     rightBtn.style.display = 'block';
//   }

//   function handleResize() {
//     const visibleCount = getVisibleCount();
//     if (currentIndex > items.length - visibleCount) {
//       currentIndex = Math.max(0, items.length - visibleCount);
//     }
//     updateDisplay();
//   }

//   leftBtn.addEventListener('click', () => {
//     const visibleCount = getVisibleCount();
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateDisplay();
//     }
//   });

//   rightBtn.addEventListener('click', () => {
//     const visibleCount = getVisibleCount();
//     if (currentIndex < items.length - visibleCount) {
//       currentIndex++;
//       updateDisplay();
//     }
//   });

//   window.addEventListener('resize', handleResize);
//   updateDisplay(); // 初始化
// });





// window.addEventListener('load', function () {
//   const items = document.querySelectorAll('.Timeph li');
//   const leftBtn = document.querySelector('.dl');
//   const rightBtn = document.querySelector('.dr');

//   let currentIndex = 0; // 從第 0 個開始

//   const VISIBLE_COUNT = 3; // 一次顯示三個

//   function updateDisplay() {
//     items.forEach((item, index) => {
//       if (index >= currentIndex && index < currentIndex + VISIBLE_COUNT) {
//         item.style.display = 'flex'; // 顯示的三個
//       } else {
//         item.style.display = 'none'; // 其他隱藏
//       }
//     });

//     // 控制按鈕顯示與否
//     leftBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
//     rightBtn.style.visibility = currentIndex + VISIBLE_COUNT >= items.length ? 'hidden' : 'visible';
//   }

//   leftBtn.addEventListener('click', () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateDisplay();
//     }
//   });

//   rightBtn.addEventListener('click', () => {
//     if (currentIndex + VISIBLE_COUNT < items.length) {
//       currentIndex++;
//       updateDisplay();
//     }
//   });

//   updateDisplay(); // 初始化畫面
// });


// 限時搶購區

$(window).on('load resize', function () {
  const $items = $('.Timeph li');
  const $leftBtn = $('.dl');
  const $rightBtn = $('.dr');

  let currentIndex = 0;

  function updateDisplay() {
    const width = $(window).width();

    if (width < 820) {
      // 小螢幕直接顯示全部，交由 CSS 滑動控制
      $items.css('display', 'flex');
      $leftBtn.hide();
      $rightBtn.hide();
      return;
    }

    // 大螢幕 (>= 820px)
    const visibleCount = 3;
    $items.each(function (index) {
      if (index >= currentIndex && index < currentIndex + visibleCount) {
        $(this).css('display', 'flex');
      } else {
        $(this).css('display', 'none');
      }
    });

    $leftBtn.show();
    $rightBtn.show();
  }

  $('.dl').off('click').on('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateDisplay();
    }
  });

  $('.dr').off('click').on('click', function () {
    if (currentIndex < $items.length - 3) {
      currentIndex++;
      updateDisplay();
    }
  });

  updateDisplay(); // 初始化
});

