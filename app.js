
const add_product = document.getElementById('add_product');
const sesh = document.getElementById('sesh');
const add_box = document.querySelector('.product-add-box');


add_product.addEventListener('click', function (e) {
    e.preventDefault();
add_box.style.display = 'block';

});

sesh.addEventListener('click', function () {
    
    add_box.style.display = 'none';

})

