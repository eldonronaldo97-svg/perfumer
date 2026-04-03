let products=[];
let selected=null;

fetch('./products.json')
.then(r=>r.json())
.then(data=>{
products=data;
display(products);
});

function display(list){
let box=document.getElementById('products');
box.innerHTML='';
list.forEach(p=>{
box.innerHTML+=`
<div class="card">
<img src="${p.image}" width="100%">
<h3>${p.name}</h3>
<p>${p.price} EGP</p>
<button onclick="order(${p.id})">اطلب الآن</button>
</div>`;
});
}

function search(){
let v=document.getElementById('search').value.toLowerCase();
display(products.filter(p=>p.name.toLowerCase().includes(v)));
}

function order(id){
selected=products.find(p=>p.id===id);
document.getElementById('productName').innerText=selected.name;
document.getElementById('popup').style.display='block';
}

function closePopup(){
document.getElementById('popup').style.display='none';
}

function sendOrder(){
let name=document.getElementById('name').value;
let phone=document.getElementById('phone').value;
let address=document.getElementById('address').value;

let msg=`طلب جديد:
${selected.name}
الاسم: ${name}
الموبايل: ${phone}
العنوان: ${address}`;

window.open(`https://wa.me/201000000000?text=${encodeURIComponent(msg)}`);
}
