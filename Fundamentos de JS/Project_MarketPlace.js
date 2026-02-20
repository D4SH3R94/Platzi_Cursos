const buttonMostrar = document.querySelector('.button_mostrar');
const buttonCart = document.querySelector('.showCart');
const firstPage = document.querySelector('.first_page');
const secondPage = document.querySelector('.second_page');
const thirdPage = document.querySelector('.third_page');
const productsContainer = document.getElementById("products_container");
let cart = [];

const stores = {
    calzado: { name: "Calzado", discount: 0.10 },
    ropa: { name: "Ropa", discount: 0.15 },
    tecnologia: { name: "Tecnología", discount: 0.05 },
    perfumes: { name: "Perfumes", discount: 0.12 }
}

const products = [
    { id: "calz-01", storeId: "calzado", brand: "Adidas", denomination: "adidas_curve", price: 89.99, desc: "adidas running shoes", image: "./media/Calzados/adidas_curve.jpg" },
    { id: "calz-02", storeId: "calzado", brand: "Nike", denomination: "nike_orange", price: 129.99, desc: "Nike Air Max shoes Orange", image: "./media/Calzados/nike_orange.jpg" },
    { id: "calz-03", storeId: "calzado", brand: "Puma", denomination: "puma_classic_black", price: 79.99, desc: "Puma Classic shoes black", image: "./media/Calzados/Puma_black.webp" },
    { id: "calz-04", storeId: "calzado", brand: "Puma", denomination: "puma_sneakers_golden", price: 99.99, desc: "Puma Sneakers shoes Golden", image: "./media/Calzados/Puma_black_golden.jpg" },
    { id: "calz-05", storeId: "calzado", brand: "Puma", denomination: "puma", price: 69.99, desc: "Puma Pretty", image:"./media/Calzados/Puma_pretty.webp" },
    { id: "ropa-01", storeId: "ropa", brand: "hm", denomination: "hm_shirt_casual", price: 29.99, desc: "H&M Casual Shirt", image: "./media/Ropa/hm_shirt_casual.jpg" },
    {id: "ropa-02", storeId: "ropa", brand: "nike_strength", denomination: "nike_strength_tshirt", price: 39.99, desc: "Nike Strength T-Shirt", image: "./media/Ropa/nike_strength_tshirt.jpg" },
    {id: "ropa-03", storeId: "ropa", brand: "nike_women_hoodie", denomination: "nike_women_hoodie", price: 49.99, desc: "Nike Women Hoodie", image:"./media/Ropa/nike_women_hoodie.jpg" },
    {id: "ropa-04", storeId: "ropa", brand: "nike_blue_shirt", denomination: "nike_blue_shirt", price: 34.99, desc: "Nike Blue Shirt", image:"./media/Ropa/nike_blue_shirt.jpg" },
    {id: "ropa-05", storeId: "ropa", brand: "zara", denomination: "zara_clouthes", price: 24.99, desc: "Zara Clothes", image:"./media/Ropa/zara_clouthes.jpg" },
    {id: "tecno-01", storeId: "tecnologia", brand: "apple", denomination: "apple_iphone_14_red", price: 999.99, desc: "Apple iPhone 14 Red", image:"./media/Tech/iphone_red.jpg" },
    {id: "tecno-02", storeId: "tecnologia", brand: "samsung_galaxy_s23_pro", denomination: "samsung_galaxy_s23_pro", price: 899.99, desc: "Samsung Galaxy S23 Pro", image:"./media/Tech/samsung_pro.avif" },
    {id: "tecno-03", storeId: "tecnologia", brand: "sony_headphones_black", denomination: "sony_headphones_black", price: 199.99, desc: "Sony Headphones Black", image:"./media/Tech/sony_headphones_black.jpg" },
    {id: "tecno-04", storeId: "tecnologia", brand: "sony_headphones_wh_1000xm6", denomination: "sony_headphones_wh_1000xm6", price: 349.99, desc: "Sony Headphones WH-1000XM6", image:"./media/Tech/Wh_1000xm6_headphones.webp" },
    {id: "tecno-05", storeId: "tecnologia", brand: "sony_headphones_wh_ch720n", denomination: "sony_headphones_wh_ch720n", price: 149.99, desc: "Sony Headphones WH-CH720N", image:"./media/Tech/WH-CH720N_Product_intro_Pink_01_M_sony.webp" },
    {id: "perfume-01", storeId: "perfumes", brand: "chanel", denomination: "chanel_orange", price: 149.99, desc: "Chanel Orange Perfume", image:"./media/Perfum/chanel_orange.jpg" },
    {id: "perfume-02", storeId: "perfumes", brand: "sauvage_dior", denomination: "sauvage_dior", price: 129.99, desc: "Sauvage Dior Perfume", image:"./media/Perfum/sauvage_dior.webp" },
    {id: "perfume-03", storeId: "perfumes", brand: "versace", denomination: "versace_blue", price: 99.99, desc: "Versace Blue Perfume", image:"./media/Perfum/versace_blue.jpg" },
    {id: "perfume-04", storeId: "perfumes", brand: "versace", denomination: "versace_yellow", price: 89.99, desc: "Versace Yellow Perfume", image:"./media/Perfum/versace_yellow.webp" },
    {id: "perfume-05", storeId: "perfumes", brand: "versace", denomination: "versace_britgh_crystal", price: 79.99, desc: "Versace Bright Crystal Perfume", image:"./media/Perfum/versace-bright-crystal-fragrance-for-her_1.webp" },
]
function priceWithStoreDiscount(product) {
    const store = stores[product.storeId];
    const discountedPrice = product.price * (1 - store.discount);
    return discountedPrice.toFixed(2);
}
function renderProductsByStore(list) {
    const container = document.querySelector('.products_container');
    const template = container.querySelector('.cardContainer');
    if (!template) return;
    container.innerHTML = '';
    list.forEach((p) => {
        const card = template.cloneNode(true);
        const finalPrice = priceWithStoreDiscount(p);
        const img = card.querySelector('figure img');
        img.src = p.image;
        img.alt = p.denomination;
        card.querySelector('.productName').textContent = p.denomination;
        card.querySelector('.details').textContent = p.desc;
        card.querySelector('.productPrice').textContent = `$${finalPrice}`;
        card.dataset.id = p.id;
        container.appendChild(card);
    });
}

buttonMostrar.addEventListener('click', function(e) {
    e.preventDefault(); 
    const selectedStore = [];
    
    if(document.getElementById('calzado').checked) selectedStore.push('calzado');
    if(document.getElementById('ropa').checked) selectedStore.push('ropa');
    if(document.getElementById('tecnologia').checked) selectedStore.push('tecnologia');
    if(document.getElementById('perfumes').checked) selectedStore.push('perfumes');

    const list = products.filter(p => selectedStore.includes(p.storeId));
    renderProductsByStore(list);

    firstPage.classList.add('collapse_first_page');
    secondPage.classList.add('expand_second_page');
});

buttonCart.addEventListener('click', function() {
    secondPage.classList.add('collapse_second_page');
    thirdPage.classList.add('expand_third_page');

    renderCart();
    renderCartStoresFromCart();
    renderProductsNamesFromCart();
    renderCartDiscountsFromStores();
    renderFinalDiscount();
    renderFinalPrice();
});

productsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".addButton");
    if (!btn) return;

    const card = btn.closest(".cardContainer");
    const productId = card.dataset.id;

    addToCart(productId);
});

function addToCart(productId){
    const alreadyInCart = cart.includes(productId);

    if (alreadyInCart) return;

    cart.push(productId);
}

function renderCart(){
    const container = document.querySelector(".littleCartContainer");
    const template = container.querySelector(".productsCartContainer");
    if(!template) return;

    container.innerHTML = "";

    cart.forEach ((id) =>{
        const p = products.find(prod => prod.id === id);
        if (!p) return;

        const card = template.cloneNode(true)
        const finalPrice = priceWithStoreDiscount(p);

        const img = card.querySelector("figure img");
        img.src = p.image;
        img.alt = p.denomination;

        card.querySelector(".productNameCart").textContent = p.denomination;
        card.querySelector(".productPriceCart").textContent = `$${finalPrice}`;
        
        card.dataset.id = p.id;
        
        container.appendChild(card);
    });
}

function renderCartStoresFromCart(){
    const firstText = document.querySelector(".firstText");
    const title = firstText.querySelector(".cartStores");

    firstText.querySelectorAll(".autoCreateStores").forEach((element) => {
        element.remove();
    });

    const storesIds = cart
    .map(id => products.find(p => p.id === id))
    .filter(Boolean)
    .map(p => p.storeId);

    const uniqueStoresIds = [...new Set(storesIds)];

    let anchor =  title;
    uniqueStoresIds.forEach((storeId) => {
        const h1 = document.createElement("h1");
        h1.className = "autoCreateStores";
        h1.textContent = stores[storeId].name;
        
        anchor.insertAdjacentElement("afterend", h1);
        anchor = h1
    });
}

function renderProductsNamesFromCart() {
   const box = document.querySelector(".provisionalProductsNames");
   if(!box) return;

   box.innerHTML = "";

   const cartProducts = cart
   .map(id => products.find(p => p.id === id))
   .filter(Boolean);

   cartProducts.forEach((product) => {
       const h2 = document.createElement("h2");
       h2.className = "autoCreateProductsNames";
       h2.textContent = product.denomination;
       
       box.appendChild(h2);
   });
}

function renderCartDiscountsFromStores(){
    const firstText = document.querySelector(".firstText");
    const title = firstText.querySelector(".discountStores");

    firstText.querySelectorAll(".autoCreateDiscounts").forEach((element) => {
        element.remove();
    });

    const storeIds = cart
    .map(id => products.find(p => p.id === id))
    .filter(Boolean)
    .map (p => p.storeId);

    const uniqueDiscounts = [...new Set(storeIds)];

    let anchor =  title;
    uniqueDiscounts.forEach((storeId) => {
        const p = document.createElement("p");
        p.className = "autoCreateDiscounts";
        p.textContent = `${stores[storeId].name}: ${stores[storeId].discount * 100}%`;
        
        anchor.insertAdjacentElement("afterend", p);
        anchor = p;
    });
}
function calculatedFinalDiscount(){
    const cartProducts = cart
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);

    const storeIds = [...new Set(cartProducts.map(p => p.storeId))];

    const discounts = storeIds.map(id => stores[id].discount);
    const sum = discounts.reduce((a, b) => a + b, 0)* 100;
    const bonus = sum * 0.1;
    const max = Math.max(...discounts) * 100;

    const finalDiscount = max + bonus;
    console.log(sum, bonus, max, finalDiscount);
    return finalDiscount;    
} 
function renderFinalDiscount(){
    const secondText = document.querySelector(".secondText");
    const discount = secondText.querySelector(".finalDiscount");
    discount.textContent = `${calculatedFinalDiscount()}%`;
}
function renderFinalPrice(){
    const secondText = document.querySelector(".secondText");
    const finalPrice = secondText.querySelector(".finalPrice");
    const cartProducts = cart
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);

    const sum = cartProducts.reduce((a, b) => a + b.price, 0);
    const finalPriceWithDiscount = sum * (1 - calculatedFinalDiscount() / 100);
    console.log(sum, finalPriceWithDiscount);
    finalPrice.textContent = `$${finalPriceWithDiscount.toFixed(2)}`;
}
