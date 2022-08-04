
 

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



let params = new URLSearchParams(window.location.search)
let id = params.get("id")

let productName = document.querySelector(".details-name")
let productId = document.querySelector(".details-id")
let productBrand = document.querySelector(".details-brand")
let productPrice = document.querySelector(".details-price")
let productDesc = document.querySelector(".details-desc")

let product = products.find(p => p.id == id)

// hiển thị thông tin
let renderProduct = (obj) =>{
  productName.innerHTML = obj.name
  productId.innerHTML = obj.id
  productPrice.innerHTML = obj.price
  productDesc.innerHTML = obj.description
}

renderProduct(product)
// hiển thị image

let imagePreviewEle = document.querySelector(".details-preview")
let imageThumbEle = document.querySelector(".details-thumb")
let imageVideoEle = document.querySelector(".descriptions-video")

let renderImagePreview = (arr = []) =>{
  imagePreviewEle.innerHTML = ""
  let html = ""
  arr.forEach((image) =>{
    html +=`<li>
    <img src=${image} alt="">
    </li>`
  })
  imagePreviewEle.innerHTML = html
}

renderImagePreview(product.images)

let renderImageThumb = (arr=[]) =>{
  imageThumbEle.innerHTML = ""
  let html = ""
  arr.forEach((image) =>{
    html +=`<li>
    <img src=${image} alt="">
    </li>`
  })
  imageThumbEle.innerHTML = html
}

renderImageThumb(product.images)

let renderImageVideo = (arr=[]) =>{
  imageVideoEle.innerHTML =`<img src=${arr[1]} alt="">
    <a href="">
      <i class="fa-solid fa-circle-play"></i>
    </a>`
}

renderImageVideo(product.images)


// slick slider
$('.details-preview').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.details-thumb'
});

$('.details-thumb').slick({
  slidesToShow: 4,
  arrows:false,
  slidesToScroll: 1,
  asNavFor: '.details-preview',
  focusOnSelect: true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa          fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});