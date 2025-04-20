$(function(){
    // $('#productName').input()  // jQuery 沒有 input 事件，所以不能這樣寫
    $('#search').on('input', function(){
        let productName = $('#search').val()
        console.log(123);
        $('.wrap').each(function(){
            let item = $(this).data('item')
            console.log(item)
            if(item.indexOf(productName) != -1){
                $(this).show()
            }else{
                $(this).hide()
            }
        })
    })
});


