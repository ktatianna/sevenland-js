//variables para el DOM
const main = document.getElementById('items');

//Carrito de productos 
let cart = [];

//Formato precios 
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
})

//añadir productos al carrito de compras
function shoppingCart(id) {
    //añadir elementos al carrito
    const resultado = products.find(product => product.id == id);
    cart.push(resultado);
    console.log(cart);

    //calcular total del carrito
    const precioTotal = cart.map(product => product.precio).reduce((prev, curr) => prev + curr, 0);
    console.log("Total: " + precioTotal);
}



function ProductDetail(i) {
    location.href=`src/views/productDetail.html?id=${i}`;  
}

window.onload = function showProducts() {
    main.innerHTML = '';
    products.forEach(product => {
        const productsHTML = document.createElement('div');
        productsHTML.innerHTML = `
            <div class="col">
                <div id="${product.id}" class="card card-products h-100 text-center">
                    <img onclick="ProductDetail(${product.id})" src="src/multimedia/img/productos/${product.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${product.nombre}</h5>
                        <p class="card-price">${formatter.format(product.precio)} c/u </p>
                        <button onclick="shoppingCart(${product.id})" href="#" class="btn btn-card">Añadir al carrito</button>
                    </div>
                </div>
            </div> 
            `
        main.appendChild(productsHTML);
    })
}


