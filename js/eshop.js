var tovarmassiv=[];
$('document').ready(function(){
    loadGoods();
});
function loadGoods() {
    $.getJSON('json/goods.json', function(data) {
        var out = '';
        for(var key in data){
            out+='<div class="col-md-4" sortirovka="'+data[key]['cost']+'">';
            out+='<div class="ptoduct">';
            out+='<div class="image">';
            out+='<a href="tovar.html">';
            out+='<div class="image">'
            out+='<button tovar="'+key+'" class="buttonhidden" id="pj"><img src="'+data[key].image +'" width="300" height="300"></button>'
            out+='</div>';
            out+='</a>';
            out+='</div>';
            out+='<div class="info">';
            out+='<h3>'+data[key]['Name']+'</h3>';
            out+='<div class="info-price">';
            out+='<span class="price">'+data[key]['cost']+'<small>₽</small></span>';
            out+='</div>';
            out+='<button data-art="'+key+'" class="add-to-cart"><ion-icon name="add-circle-outline"></ion-icon></button>';
            out+='</div>';
            out+='</div>';
            out+='</div>';
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
        $('button.buttonhidden').on('click', tovarLS);
    });
}
function tovarLS(){
    var articul = $(this).attr('tovar');
    tovarmassiv[0]=articul;
    localStorage.setItem('tovarseychas', JSON.stringify(tovarmassiv));
}