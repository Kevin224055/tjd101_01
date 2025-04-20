$(function () {
    $('.hamburger').click(function () {
      $('.transition').toggleClass('show');
    });
  });




  $(function(){
    $('.hamburger').click(function(){
              // $(this).addClass('active')
              $(this).toggleClass('active')
          })
  })


$(document).ready(function () {
    
  
    // $('.fa-heart').on('click', function () {
    //   $(this).toggleClass('red');
    // });

    

    $(document).on('click', '.fa-heart', function () {
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

    window.addEventListener('load', function () {
      const items = document.querySelectorAll('.buyproduct .gogo ul li');
      const leftBtn = document.querySelectorAll('.buyproduct .itt')[0];
      const rightBtn = document.querySelectorAll('.buyproduct .itt')[1];
  
      const itemsPerGroup = 8; // 一次顯示 10 個（兩列，每列 5 個）
      const totalItems = items.length;
      const maxIndex = Math.ceil(totalItems / itemsPerGroup) - 1;
      let currentIndex = 0;
  
      function updateDisplay() {
        items.forEach((item, index) => {
          if (
            index >= currentIndex * itemsPerGroup &&
            index < (currentIndex + 1) * itemsPerGroup
          ) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
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
        if (currentIndex < maxIndex) {
          currentIndex++;
          updateDisplay();
        }
      });
  
      updateDisplay(); // 初始化顯示
    });





    // 取購物車
    
    $(document).ready(function () {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const $container = $('#product-area');
      $container.empty();
    
      cart.forEach((item, index) => {
        const $lefttp = $('<section class="lefttp"></section>');
    
        // .ph
        const $ph = $('<section class="ph"></section>');
        const $img = $('<img>').attr('src', item.imgSrc).attr('alt', item.name);
        $ph.append($img);
    
        // .ph-r
        const $phR = $('<section class="ph-r"></section>');
        const $h3 = $('<h3></h3>').text(item.name);
        const $price = $('<section class="price"><p>' + item.price + '</p></section>');
    
        const $number = $('<section class="number"><p>數量:</p></section>');
        const $form = $('<form></form>');
        const $select = $('<select id="down" name="down"></select>');
        for (let i = 1; i <= 10; i++) {
          $select.append(`<option value="${i}">${i}</option>`);
        }
        $form.append($select);
        $number.append($form);
    
        const $btt = $('<section class="btt"></section>');
        const $btnTrack = $('<button type="button">追蹤</button>');
        const $btnDelete = $('<button type="button">刪除</button>').attr('data-index', index);
        $btt.append($btnTrack, $btnDelete);
    
        $phR.append($h3, $price, $number, $btt);
    
        // ⬇️ 組裝進 lefttp
        $lefttp.append($ph, $phR);
    
        // 加入主容器
        $container.append($lefttp);
      });
    
      // ✅ 綁定刪除事件
      $('#product-area').on('click', 'button:contains("刪除")', function () {
        const index = $(this).attr('data-index');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    
        // 移除外層 .lefttp
        $(this).closest('.lefttp').remove();
      });
    });
    










