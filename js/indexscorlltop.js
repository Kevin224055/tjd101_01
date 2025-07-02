
//回到最上層
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





//漢堡

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

  
//導覽
  

$(document).ready(function () {
  countdownTo('2025-05-01 23:59:59')

  $('.fa-heart').on('click', function () {
    $(this).toggleClass('red');
  });

    $('.transition > li > a').on('click', function (e) {
      var $side = $(this).siblings('.side');
  
      
      if ($side.length > 0 && window.matchMedia("(max-width: 820px)").matches) {
        e.preventDefault(); 
  
        
        if ($side.hasClass('active')) {
          $side.removeClass('active');
        } else {
          
          $('.side').removeClass('active');
  
          
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

 
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 2000); 
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  
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

  
  showSlide(currentIndex);
  startAutoplay();
});





// 限時搶購區

$(window).on('load resize', function () {
  const $items = $('.Timeph li');
  const $leftBtn = $('.dl');
  const $rightBtn = $('.dr');

  let currentIndex = 0;

  function updateDisplay() {
    const width = $(window).width();

    if (width <= 820) {
      
      $items.css('display', 'flex');
      $leftBtn.hide();
      $rightBtn.hide();
      return;
    }

    // >= 820px
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

  updateDisplay(); 
});

