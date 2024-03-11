var cart={};
$('document').ready(function(){
    CheckCart();
    LoadTovar();

});
function LoadTovar(){
    $.getJSON('json/goods.json', function(data){
        out='';
        var tovarseychass=JSON.parse(localStorage.getItem('tovarseychas'))
        for(var key in data)
        {
            if(key==tovarseychass[0])
            {
                out+='<div class="image2">';
                out+='<img src="'+data[key].image +'" height="500" width="500">';
                out+='</div>';
                out+='<div class="right-column1">';
                out+='<div class="product-description1">';
                out+='<span>Sneakers</span>';
                out+='<h1>'+data[key]['Name']+'</h1>';
                out+='<p>'+data[key]['brend']+'</p>';
                out+='</div>';
                out+='<div class="product-configuration1">';
                out+='<div class="product-price1">';
                out+='<span>'+data[key]['cost']+'</span>';
                out+='<button data-art="'+key+'" class="add-to-cart">Добавить в корзину</button>';
                out+='</div>';
                out+='</div>';
            }
        }
        $('#tovar').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}
function addToCart() {
    var articul=$(this).attr('data-art');
    if(cart[articul]!=undefined){
        cart[articul]++;
    }
    else{
        cart[articul]=1;
    }
    ShowMiniCart();
    localStorage.setItem('cart', JSON.stringify(cart));
}
function CheckCart(){
    if(localStorage.getItem('cart')!=null){
        cart=JSON.parse(localStorage.getItem('cart'))
    }
}
function ShowMiniCart(){
    let out=0;
    for(var w in cart){
        out=out+cart[w];
    }
    $('#mini-cart').html(out);
}
