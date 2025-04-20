$(function(){
    
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





$(document).ready(function () {
    
  
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





    //購物車

    $(document).ready(function () {
      $('.ccr').click(function () {
        console.log(123);
    
        
        const li = $(this).closest('li');//取得li容器
    
        
        const imgSrc = li.find('img').attr('src');
    
        
        const name = li.find('p').first().text();
    
        
        const price = li.find('.price p').first().text();
    
        const product = {
          imgSrc,
          name,
          price
        };
    
        
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        
        cart.push(product);
    
        
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
            .closest('.fold')          
            .find('.inside')             
            .slideToggle(1000, 'easeInOutBack');  
        });
      });
    


