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