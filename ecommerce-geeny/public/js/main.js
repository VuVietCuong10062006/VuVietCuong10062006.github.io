
$(document).ready(function(){
    $('.banner').slick({
        autoplay:true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});

$('.testimonial-slick').slick({
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa          fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '150px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });

// cart sidebar

let headerCart = document.querySelector(".header-cart")
let cartSidebarClose = document.querySelector(".cart-sidebar-close")
let cartSidebar = document.querySelector(".cart-sidebar")

headerCart.addEventListener("click",() =>{
  cartSidebar.classList.add("cart-sidebar-active")
})

cartSidebarClose.addEventListener('click',() =>{
  cartSidebar.classList.remove("cart-sidebar-active")
})

// nav-sidebar

let navSidebarBtn = document.querySelector('.btn-nav-sidebar')
let navSidebar = document.querySelector('.nav-sidebar')
let navSidebarClose = document.querySelector('.nav-sidebar-close')

navSidebarBtn.addEventListener('click',() =>{
  navSidebar.classList.add('nav-sidebar-active')
})

navSidebarClose.addEventListener('click',() =>{
  navSidebar.classList.remove('nav-sidebar-active')
})

// render product sell
let productListSell = document.querySelector('.product-list-sell')
let productSells = products.filter((p) =>{
  return p.tag == "Sale"
})

let renderProductSell = (arr = []) =>{
  productListSell.innerHTML=""
  let html = ''
  arr.forEach((p) =>{
    html += `<div class="col">
    <div class="product-card">
      <div class="product-image">
        <div class="product-label">
          <label>${p.tag}</label>
        </div>
        <div class="product-wish">
          <i class="fa-solid fa-heart"></i>
        </div>
        <a href="./page/deital.html">
          <img src=${p.images[0]} alt="">
        </a>
        <div class="product-widget">
          <a href="" class="product-video">
            <i class="fa-solid fa-play"></i>
          </a>
          <a href="" class="product-view">
            <i class="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>
      <div class="product-content">
        <div class="product-rating">
          <i class="active fa-solid fa-star"></i>
          <i class="active fa-solid fa-star"></i>
          <i class="active fa-solid fa-star"></i>
          <i class="active fa-solid fa-star"></i>
          <i class=" fa-solid fa-star"></i>
          <a href="">(3)</a>
        </div>
        <h6 class="product-name">${p.name}</h6>
        <h6 class="product-price">${p.price}</h6>
        <button class="product-add">
          <i class="fa-solid fa-basket-shopping"></i>
          <span>ADD</span>
        </button>
      </div>
    </div>
  </div>`
  })

  productListSell.innerHTML = html
}

renderProductSell(productSells)

// render product feature
let productListFeature = document.querySelector(".product-list-feature")
let productFeatures = products.filter((p) =>{
  return p.tag == "Feature"
})
console.log(productFeatures)

let renderProductFeature = (arr = []) =>{
  productListFeature.innerHTML = ""
  let html = ""
  arr.forEach((p) =>{
    html += `<div class="col">
    <div class="feature-card">
      <div class="feature-image">
        <div class="feature-label">
          <label>${p.tag}</label>
        </div>
        <div class="feature-wish">
          <i class="fa-solid fa-heart"></i>
        </div>
        <a href="./page/deital.html">
          <img src=${p.images[0]} alt="">
        </a>
        <div class="feature-widget">
          <a href="" class="feature-video">
            <i class="fa-solid fa-play"></i>
          </a>
          <a href="" class="feature-view">
            <i class="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>

      <div class="feature-content">
        <h6 class="feature-name">${p.name}</h6>
        <div class="feature-rating">
          <i class="active fa-solid fa-star"></i>
          <i class="active fa-solid fa-star"></i>
          <i class="active fa-solid fa-star"></i>
          <i class="active fa-solid fa-star"></i>
          <i class=" fa-solid fa-star"></i>
          <a href="">(3)</a>
        </div>
        <h6 class="feature-price">${p.price}</h6>
        <p class="feature-desc">
          ${p.decscripcion}
        </p>
        <button class="feature-add">
          <i class="fa-solid fa-basket-shopping"></i>
          <span>ADD</span>
        </button>
      </div>
    </div>
  </div>`
  })
  productListFeature.innerHTML = html
}

renderProductFeature(productFeatures)




