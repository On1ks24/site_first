var cart={};
$('document').ready(function(){
    CheckCart();
    ShowMiniCart();
});
function addToCart() {
    var articul=$(this).attr('data-art');
    if(cart[articul]!=undefined){
        cart[articul]++;
    }
    else{
        cart[articul]=1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    ShowMiniCart();
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

