document.addEventListener('DOMContentLoaded', function(){

    let ul = document.getElementById('shopping-list');

    console.log(ul);

    const btn1 = document.getElementById('button-1');
    const btn2 = document.getElementById('button-2');
    const btn3 = document.getElementById('button-3');

   btn1.addEventListener('click', function(){
      let newLi = document.createElement('li');
      newLi.innerText = 'chleb';

      ul.append(newLi);
   });

   btn2.addEventListener('click', function(){
       let lastEl = ul.lastElementChild;
       lastEl.remove();
   });

   btn3.addEventListener('click', function(){
      let secondProduct = ul.children[1];
       console.log(secondProduct.innerHTML);
      let newProd = document.createElement('li');

      newProd.innerText = secondProduct.innerHTML;

      ul.append(newProd);
   });


});