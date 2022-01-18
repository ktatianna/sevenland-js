//Carrito de productos 
let cart = [];

//añadir productos al carrito de compras
function shoppingCart(id) {
    //añadir elementos al carrito
    const resultado = products.find(product => product.id == id);
    cart.push(resultado);
    console.log(cart)
    storage(cart); 
   calculateTotal(); 
}

function storage(cart){ 
    localStorage.setItem("productsInCart", JSON.stringify(cart));
}
//calcular total del carrito
function calculateTotal(){ 
    const precioTotal = cart.map(product => product.precio).reduce((prev, curr) => prev + curr, 0);
    console.log("Total: " + precioTotal);
}
