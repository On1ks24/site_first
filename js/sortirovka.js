function mySortvozr(){
    let navv=document.querySelector('#goods');
    for(let i =0;i<navv.children.length;i++){
        for(let j =i;j<navv.children.length;j++){
            if (+navv.children[i].getAttribute('sortirovka')>+navv.children[j].getAttribute('sortirovka')){
                replacedNode= navv.replaceChild(navv.children[j], navv.children[i]);
                insertAfter(replacedNode, navv.children[i]);
            }
  
        }        
    }
}
function insertAfter(elem, refelem){
    return refelem.parentNode.insertBefore(elem, refelem.nextSibling);
}
document.querySelector('#vozr').onclick=mySortvozr;