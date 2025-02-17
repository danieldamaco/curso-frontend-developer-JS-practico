const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCartIcon = document.querySelector('.navbar-shopping-cart');
const shopCartMenu = document.querySelector('#shoppingCartContainer');
const productDetailcontainer = document.querySelector('#productDetail');
const productDetailCloser = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shopCartIcon.addEventListener('click', toggleshopCart);
productDetailCloser.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isproductDetailcontainerClosed = productDetailcontainer.classList.contains('inactive');

    // si el productDetailcontainer está open, hay que cerrarlo 
    if(!isproductDetailcontainerClosed){
        productDetailcontainer.classList.add('inactive');
    }
    
    const isshopCartMenuClosed = shopCartMenu.classList.contains('inactive');

    // si el shopCartMenu está open, hay que cerrarlo 
    if(!isshopCartMenuClosed){
        shopCartMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isproductDetailcontainerClosed = productDetailcontainer.classList.contains('inactive');

    // si el productDetailcontainer está open, hay que cerrarlo 
    if(!isproductDetailcontainerClosed){
        productDetailcontainer.classList.add('inactive');
    }
    const isshopCartMenuClosed = shopCartMenu.classList.contains('inactive');

    // si el shopCartMenu está open, hay que cerrarlo 
    if(!isshopCartMenuClosed){
        shopCartMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleshopCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isproductDetailcontainerClosed = productDetailcontainer.classList.contains('inactive');

    // si el productDetailcontainer está open, hay que cerrarlo 
    if(!isproductDetailcontainerClosed){
        productDetailcontainer.classList.add('inactive');
    }

    // si el desktopMenu está open, hay que cerrarlo 
    if(!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    // si el mobileMenu está open, hay que cerrarlo 
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    shopCartMenu.classList.toggle('inactive');
    
}

function openProductDetailAside(){
    productDetailcontainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    const isshopCartMenuClosed = shopCartMenu.classList.contains('inactive');

    // si el shopCartMenu está open, hay que cerrarlo 
    if(!isshopCartMenuClosed){
        shopCartMenu.classList.add('inactive');
    }

    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
    // si el desktopMenu está open, hay que cerrarlo 
    if(!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    productDetailcontainer.classList.add('inactive')
}

const productList =[];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    

    productCard.appendChild(img);
    productCard.appendChild(productInfo);


    cardsContainer.appendChild(productCard);


    
}