const containerTable = document.getElementById('body-table');

window.onload = function showProductsTable() {
    var storage = JSON.parse(localStorage.getItem("productsInCart"))
    console.log(storage);
    containerTable.innerHTML = '';
    storage.forEach(item => {
        const tableHTML = document.createElement('tr');
        tableHTML.innerHTML = `

            <th scope="row">1</th>
            <td>${item.nombre}</td>
            <td>${formatter.format(item.precio)}</td>
        `; 
        containerTable.appendChild(tableHTML);
        })
        
}