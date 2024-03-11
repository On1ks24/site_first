var cart={};
$.getJSON('json/goods.json', function(data){
    var goods=data;
    CheckCart();
    showCart();
    function showCart(){
        if($.isEmptyObject(cart))
        {
            var out=''
            $('#my-cart').html(out);
        }
        else
        {
            var out='';
            let tyr=0;
            for(var key in cart){
                out+='<div class="to_cho_vibral_s_line">';
                out+='<div class="header_line2"></div>';
                out+='<div class="container_tovara">';
                out+='<div class="col-md-4">';
                out+='<div class="ptoduct">';
                out+='<div class="image">';
                out+='<img src="'+goods[key].image+'" height="200" width="200">';
                out+='</div>';
                out+='</div>';
                out+='</div>';
                out+='<div class="info2">';
                out+='<div class="info3">';
                out+='<h2>'+goods[key].Name+'</h2>';
                out+='</div>';
                out+='<div class="header_inner2">';
                out+='<div class="info-price2">';
                out+='<span class="price">'+goods[key].cost+'<small>₽</small><p class="razmer">цена за 1 шт</p></span>';
                out+='</div>';
                out+='<button class="add-to-cartminus" data-art="'+key+'"><ion-icon name="remove-outline"></ion-icon></ion-icon></button>';
                out+='<div class="info-price2">';
                out+='<span class="price2">'+cart[key]+'<p class="razmer">шт</p></span>';
                out+='</div>';
                out+='<button class="add-to-cartplus" data-art="'+key+'"><ion-icon name="add-outline"></ion-icon></ion-icon></button>';
                out+='<div class="info-price2">';
                out+='<span class="price">'+cart[key]*goods[key].cost+'<small>₽</small></span>';
                out+='</div>';
                out+='</div>';
                out+='</div>';
                out+='</div>';
                out+='</div>';
                tyr+=cart[key]*goods[key].cost;
            }
            out+='<div class="itog_s_line">';
            out+='<div class="header_line2"></div>';
            out+='<div class="container_cart_itog">';
            out+='<span class="price">Итого:</span>';
            out+='<div class="">';
            out+='<span class="price">'+tyr+'<small>₽</small></span>';
            out+='<a href="otpravka.html"><button class="add-to-cart3">Купить</button></a>';
            out+='</div>';
            out+='</div>';
            out+='</div>';
            $('#my-cart').html(out);
            $('.add-to-cartplus').on('click', plusGoods);
            $('.add-to-cartminus').on('click', minusGoods);
            }
    }
    function plusGoods(){
        var articul=$(this).attr('data-art');
        cart[articul]++;
        saveCartToLS();
        showCart();
        ShowMiniCart();
    }
    function minusGoods(){
        var articul=$(this).attr('data-art');
        if(cart[articul]>1){
            cart[articul]--;
        }
        else{
            delete cart[articul];
        }
        saveCartToLS();
        showCart();
        ShowMiniCart();
    }
    
});
function CheckCart(){
    if(localStorage.getItem('cart')!=null){
        cart=JSON.parse(localStorage.getItem('cart'))
    }
}
function saveCartToLS(){
    localStorage.setItem('cart', JSON.stringify(cart));
}
function ShowMiniCart(){
    let out=0;
    for(var w in cart){
        out=out+cart[w];
    }
    $('#mini-cart').html(out);
}