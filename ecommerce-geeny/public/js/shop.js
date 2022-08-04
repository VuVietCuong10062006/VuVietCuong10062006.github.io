
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

// render product
let productList = document.querySelector(".shop-product-list")

let renderProductShop = (arr = []) =>{
  productList.innerHTML = ""
  let html = ""
  arr.forEach((p,i) =>{
    if(i<=12){
      html += `<div class="col">
      <div class="product-card">
          <div class="product-image">
            <div class="product-label">
              <label>${p.tag}</label>
            </div>
            <div class="product-wish">
              <i class="fa-solid fa-heart"></i>
            </div>
            <a href="./deital.html">
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
    }
  })

  productList.innerHTML = html
}

renderProductShop(products)

