//Carrito de productos 
let cart = [];

//añadir productos al carrito de compras
function shoppingCart(id) {
    const resultado = products.find(product => product.id == id);
    cart.push(resultado);
    storage(resultado);
}

//eliminar productos del carrito 
function deleteItem(id) { 
    var storage = JSON.parse(localStorage.getItem("productsInCart"))
    console.log(storage)
    const resultado = storage.filter(product => product.id !== id)
    console.log(resultado)
    localStorage.setItem("productsInCart", JSON.stringify(resultado));
    location.reload();
}


//calcular total del carrito
function calculateTotal(){ 
    let precioTotal = JSON.parse(localStorage.getItem("productsInCart")).map(product => product.precio).reduce((prev, curr) => prev + curr, 0);
    console.log("Total: " + precioTotal); 
    return precioTotal; 
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