const main = document.getElementById('items');

// Productos
const products = [
    {
        id: 1,
        nombre: "Kalanchoe",
        precio: 10000,
        imagen: "producto1.png",
        descripcion:
            "El kalanchoe es, sin duda, una planta idónea para la decoración de espacios interiores y exteriores. Con colores exóticos como el rojo, fucsia, naranja y amarillo, y unas hojas carnosas que le ayudan a dosificar el agua.",
    },
    {
        id: 2,
        nombre: "Cactus",
        precio: 12000,
        imagen: "producto2.png",
        descripcion:
            "Debido a que están preparados naturalmente para almacenar agua en su estructura de tallos robustos y espinosos, los cactus se han convertido en el ornamento predilecto para espacios exteriores e interiores.",
    },
    {
        id: 3,
        nombre: "Crassula Morgan",
        precio: 20100,
        imagen: "producto3.png",
        descripcion:
            "Coloca esta crassula en un lugar donde reciba mucha luz durante todo el año y, si puede ser, en el que circule aire. ¡Debe resguardarse del frío extremo! Poco riego. Esta planta no necesita mucha agua.",
    },
    {
        id: 4,
        nombre: "Richodiadema Densum",
        precio: 6000,
        imagen: "producto4.png",
        descripcion:
            "Es una planta de crecimiento lento. Desarrolla tallos rastreros, irregulares y leñosos no excesivamente largos muy ramificados desde la base formando masas vegetales muy tupidas de poca altura, de cinco a diez centímetros.",
    },
    {
        id: 5,
        nombre: "Carnivora",
        precio: 18000,
        imagen: "producto5.png",
        descripcion:
            "Obtiene parte o la mayoría de sus necesidades nutricionales mediante la captura y el consumo de protozoos y animales, especialmente insectos .",
    },
    {
        id: 6,
        nombre: "Astrophytum Myriostigmas",
        precio: 11000,
        imagen: "producto6.png",
        descripcion:
            "Planta de color verde brillante, sin espinas, por lo general solitaria, suelen tener cinco costillas, aunque pueden variar de 3 a 10 y su epidermis esta cubierta de puntos de color blanco grisáceo.",
    },
];

//Formato precios 
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
})

function showProducts() {
    main.innerHTML = '';
    products.forEach(product => {
        const productsHTML = document.createElement('div');
        productsHTML.innerHTML = `
            <div class="col">
                <div class="card h-100 text-center">
                <img src="src/multimedia/img/productos/${product.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.nombre}</h5>
                    <p class="card-price">${formatter.format(product.precio)} c/u </p>
                    <a href="#" class="btn btn-card">Añadir al carrito</a>
                </div>
                </div>
            </div> 
            `

            main.appendChild(productsHTML);
    })
}

showProducts();


  var value = 10000

  console.log(formatter.format(value))