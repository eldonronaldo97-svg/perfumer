let products = [];
let cart = [];

fetch("products.json")
.then(res => res.json())
.then(data => {
  products = data;
  displayProducts(products);
});

function displayProducts(list){
  let container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" width="100%">
        <h3>${p.name}</h3>
        <p>${p.price} EGP</p>
        <button onclick="addToCart(${p.id})">أضف للسلة</button>
      </div>
    `;
  });
}

function addToCart(id){
  let product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart(){
  let cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "<h2>السلة</h2>";

  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} - ${item.price}</p>`;
  });
}

function search(){
  let val = document.getElementById("search").value.toLowerCase();
  let filtered = products.filter(p => p.name.toLowerCase().includes(val));
  displayProducts(filtered);
}

function filter(){
  let val = document.getElementById("filter").value;
  if(val === "all") return displayProducts(products);

  let filtered = products.filter(p => p.category === val);
  displayProducts(filtered);
}