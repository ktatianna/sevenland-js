//añadir productos al carrito de compras
function shoppingCart(id) {
    //añadir elementos al carrito
    const resultado = products.find(product => product.id == id);
    cart.push(resultado);
    localStorage.setItem("productsInCart", JSON.stringify(cart));

   calculateTotal(); 
}

//calcular total del carrito
function calculateTotal(){ 
    const precioTotal = cart.map(product => product.precio).reduce((prev, curr) => prev + curr, 0);
    console.log("Total: " + precioTotal);
}