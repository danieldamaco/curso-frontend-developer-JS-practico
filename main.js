const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCartIcon = document.querySelector('.navbar-shopping-cart');
const shopCartMenu = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shopCartIcon.addEventListener('click', toggleshopCart);


function toggleDesktopMenu(){
    const isshopCartMenuClosed = shopCartMenu.classList.contains('inactive');

    // si el shopCartMenu está open, hay que cerrarlo 
    if(!isshopCartMenuClosed){
        shopCartMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
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

    // si el shopCartMenu está open, hay que cerrarlo 
    if(!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    // si el mobileMenu está open, hay que cerrarlo 
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    shopCartMenu.classList.toggle('inactive');
    
}