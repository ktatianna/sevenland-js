//Carrito de productos 
let cart = [];

//añadir productos al carrito de compras
function shoppingCart(id) {
    const resultado = products.find(product => product.id == id);
    cart.push(resultado);
    storage(resultado);
    calculateTotal();
}

//calcular total del carrito
function calculateTotal(){ 
    const precioTotal = cart.map(product => product.precio).reduce((prev, curr) => prev + curr, 0);
    console.log("Total: " + precioTotal);
}

function storage(cart) {
    let storage = [];
    if (!localStorage.getItem("productsInCart")) {
        storage.push(cart)
        localStorage.setItem("productsInCart", JSON.stringify(storage));
        console.log(localStorage.getItem("productsInCart"))
    } else {
        storage = JSON.parse(localStorage.getItem("productsInCart"));
        storage.push(cart)
        localStorage.setItem("productsInCart", JSON.stringify(storage))
        console.log(localStorage.getItem("productsInCart"))
    }
}