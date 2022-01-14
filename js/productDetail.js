const urlParams = new URLSearchParams(window.location.search);
const pgProductDetail = document.getElementById('containerProductDetail');
console.log(urlParams.get("id"));
console.log(products)

window.onload = function showProductDetail() {
    alert("llegue")
}