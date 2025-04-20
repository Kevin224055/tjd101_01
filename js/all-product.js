$(function(){
    // $('#productName').input()  // jQuery 沒有 input 事件，所以不能這樣寫
    $('#search').on('input', function(){
        let productName = $('#search').val()
        
        $('.productlist ul li').each(function(){
            let item = $(this).data('item')
            
            if(item.indexOf(productName) != -1){
                $(this).show()
            }else{
                $(this).hide()
            }
        })
    })
});




// $(function(){
//   $('.hamburger').click(function(){
//             // $(this).addClass('active')
//             $(this).toggleClass('active')
//         })
// })


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

// 導覽列

// $(function () {
//     $('.hamburger').click(function () {
//       $('.transition').toggleClass('show');
//     });
//   });



$(document).ready(function () {
    
  
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





    //購物車

    $(document).ready(function () {
      $('.ccr').click(function () {
        console.log(123);
    
        // 取得當前按鈕所屬的商品 li
        const li = $(this).closest('li');
    
        // 取得圖片網址
        const imgSrc = li.find('img').attr('src');
    
        // 取得商品名稱（<p>）
        const name = li.find('p').first().text();
    
        // 取得價格（第一個 <p> 價格）
        const price = li.find('.price p').first().text();
    
        const product = {
          imgSrc,
          name,
          price
        };
    
        // 取得現有購物車資料（若沒有則為空陣列）
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // 加入新商品
        cart.push(product);
    
        // 存回 localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`✅ 已加入 ${product.name} 到購物車`);
        // console.log('已加入購物車:', product);
      });
      });
    



// 左邊手風琴

      $(function(){
        $('.fold .fa-chevron-down').click(function(){
          console.log(123)
          $(this)
            .closest('.fold')          // 找到該店家容器
            .find('.inside')             // 找它底下的 iframe
            .slideToggle(1000, 'easeInOutBack');  // 執行動畫
        });
      });
    


