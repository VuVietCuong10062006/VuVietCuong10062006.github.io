
$(document).ready(function(){
    $('.banner').slick({
        autoplay:true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
          {
            breakpoint: 769,
            settings:{
              arrows : false
            }
          }
        ]
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


// back top
let backTop = document.querySelector('.back-top');

window.addEventListener("scroll",() =>{
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    backTop.classList.add("back-top-active")
  }else{
    backTop.classList.remove("back-top-active")
  }
})

backTop.addEventListener("click", () =>{
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

// cart sidebar

let headerCart = document.querySelector(".header-cart")
let cartSidebarClose = document.querySelector(".cart-sidebar-close")
let cartSidebar = document.querySelector(".cart-sidebar")
let overlayEle = document.querySelector("#overlay")

headerCart.addEventListener("click",() =>{
  cartSidebar.classList.add("cart-sidebar-active")
  overlayEle.style.display = "block"
})

cartSidebarClose.addEventListener('click',() =>{
  cartSidebar.classList.remove("cart-sidebar-active")
  overlayEle.style.display = "none"
})

overlayEle.addEventListener('click',() =>{
  cartSidebar.classList.remove("cart-sidebar-active")
  overlayEle.style.display = "none"
  navSidebar.classList.remove('nav-sidebar-active')
})

// heart sidebar

let headerHeart = document.querySelector(".header-wish")
let heartSidebarClose = document.querySelector(".heart-sidebar-close")
let heartSidebar = document.querySelector(".heart-sidebar")

headerHeart.addEventListener("click",() =>{
  heartSidebar.classList.add("heart-sidebar-active")
  overlayEle.style.display = "block"
})

heartSidebarClose.addEventListener('click',() =>{
  heartSidebar.classList.remove("heart-sidebar-active")
  overlayEle.style.display = "none"
})

overlayEle.addEventListener('click',() =>{
  heartSidebar.classList.remove("heart-sidebar-active")
  overlayEle.style.display = "none"
  navSidebar.classList.remove('nav-sidebar-active')
})

// nav-sidebar

let navSidebarBtn = document.querySelector('.btn-nav-sidebar')
let navSidebar = document.querySelector('.nav-sidebar')
let navSidebarClose = document.querySelector('.nav-sidebar-close')

navSidebarBtn.addEventListener('click',() =>{
  navSidebar.classList.add('nav-sidebar-active')
  overlayEle.style.display = "block"
})

navSidebarClose.addEventListener('click',() =>{
  navSidebar.classList.remove('nav-sidebar-active')
  overlayEle.style.display = "none"
})

// nav active
let navActivepage = window.location.pathname
let navLink = document.querySelectorAll(".nav-link")

Array.from(navLink).forEach((link) =>{
  if(link.href.includes(navActivepage)){
    link.classList.add("nav-active")
  }
})


// render User
const getDataInfoUserFromLocalStorage = () => {
  const localStorageValue = localStorage.getItem("infoUser");
  if(localStorageValue) {
      return JSON.parse(localStorageValue)
  } else {
      return []
  }
}


// let headerAccount = document.querySelector(".header-content :nth-child(4)")
let account = document.querySelector(".account")
let accountClone = document.querySelector(".account-clone")
let headerAccount = document.querySelector(".account .header-account")
let headerAccountClone = document.querySelector(".header-account-clone")

let renderHeaderAccount = (arr = []) => {
  if(arr.length !== 0){
    account.innerHTML = ""
    let html = ""
    arr.forEach((p) =>{
      html += `<img src="${p.imageUser} alt="Account">
      <div class="action">
        <div class="info">
          <img src=${p.imageUser} alt="">
          <h4>${p.name}</h4>
          <p>${p.email}</p>
        </div>
        <ul>
          <li class="logout">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>`
    })
    account.innerHTML = html
  }else{
    account.innerHTML = `<a href="./page/login.html" class="header-account">
    <img src="./public/image/logo/user.png" alt="Account">
    </a>
    <div class="action">
    <div class="info">
      <img src="./public/image/avatar/avatar-1.jpg" alt="">
      <h4>Vũ Việt Cường</h4>
      <p>vuvietcuong@gmail.com</p>
    </div>
    <ul>
      <li class="logout">
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
        <span>Đăng xuất</span>
      </li>
    </ul>`
  }
}

let renderHeaderAccountClone = (arr = []) => {
  if(arr.length !== 0){
    accountClone.innerHTML = ""
    let html = ""
    arr.forEach((p) =>{
      html += `<img src="${p.imageUser} alt="Account">
      <div class="action">
        <div class="info">
          <img src=${p.imageUser} alt="">
          <h4>${p.name}</h4>
          <p>${p.email}</p>
        </div>
        <ul>
          <li class="logout">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>`
    })
    accountClone.innerHTML = html
  }else{
    accountClone.innerHTML = `<a href="./page/login.html" class="header-account header-account-clone">
    <img src="./public/image/logo/user.png" alt="Account">
    </a>
    <div class="action">
    <div class="info">
      <img src="./public/image/avatar/avatar-1.jpg" alt="">
      <h4>Vũ Việt Cường</h4>
      <p>vuvietcuong@gmail.com</p>
    </div>
    <ul>
      <li class="logout">
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
        <span>Đăng xuất</span>
      </li>
    </ul>
    </div>`
  }
}

renderHeaderAccountClone(getDataInfoUserFromLocalStorage())
renderHeaderAccount(getDataInfoUserFromLocalStorage())


let logout = document.querySelector(".account .logout")
let logoutClone = document.querySelector(".account-clone .logout")
let action = document.querySelector(".account .action")
let actionClone = document.querySelector(".account-clone .action")


account.addEventListener('click',(e) =>{ 
  if(getDataInfoUserFromLocalStorage().length != 0){
    action.classList.toggle("action-active")
  }
})

accountClone.addEventListener('click',(e) =>{
  if(getDataInfoUserFromLocalStorage().length!= 0){
    actionClone.classList.toggle("action-active")
  }
})

logout.addEventListener('click',(e) =>{
  localStorage.setItem("infoUser",JSON.stringify([]))
  renderHeaderAccount([])
})

logoutClone.addEventListener('click',(e) =>{
  localStorage.setItem("infoUser",JSON.stringify([]))
  renderHeaderAccountClone([])
})


// render product search
let headerSearchResponsiveIcon = document.querySelector(".header-search-responsive")
let headerSearchEle = document.querySelector(".header-search")
headerSearchResponsiveIcon.addEventListener('click',() =>{
  headerSearchEle.classList.toggle("header-search-active")
});

let searchProductList = document.querySelector(".search-product-list")
let headerSearchInput = document.querySelector(".header-search input")

let renderSearchProducList = (arr = []) =>{
  searchProductList.innerHTML =""
  let html = ""
  arr.forEach((p) =>{
    html += `<li class="search-product-item">
    <a href="./page/deital.html?id=${p.id}">
      <div class="search-product-image">
        <img src=${p.images[0]} alt="">
      </div>
      <div class="search-product-content">
        <h6>${p.name}</h6>
        <p>${formatMoney(p.price)}</p>
      </div>
    </a>
    </li>`
  })
  searchProductList.innerHTML =html
}

// // formatMoney
// const formatMoney = number => {
//   return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
// }

renderSearchProducList(products)

headerSearchInput.addEventListener("input",(e) =>{
  searchProductHeader()
})

let searchProductHeader = () =>{
  let inputValue = headerSearchInput.value
  let productFilter = products.filter(p => p.name.toLowerCase().includes(inputValue.toLowerCase()))
  renderSearchProducList(productFilter)
}


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
        <div class="product-wish" onclick='addProductSellToHeart(${p.id})'>
          <i class="fa-solid fa-heart"></i>
        </div>
        <a href="./page/deital.html?id=${p.id}">
          <img src=${p.images[0]} alt="">
        </a>
        <div class="product-widget">
          <a href="https://www.youtube.com/watch?v=aRxymTETvXk" class="product-video" data-vbtype="video" data-autoplay="true">
            <i class="fa-solid fa-play"></i>
          </a>
          <a href="./page/deital.html?id=${p.id}" class="product-view">
            <i class="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>
      <div class="product-content">
        <div class="product-rating">
          <i class="${p.rating >=1 ?'active' :''} fa-solid fa-star"></i>
          <i class="${p.rating >=2 ?'active' :''} fa-solid fa-star"></i>
          <i class="${p.rating >=3 ?'active' :''} fa-solid fa-star"></i>
          <i class="${p.rating >=4 ?'active' :''} fa-solid fa-star"></i>
          <i class="${p.rating >=5 ?'active' :''} fa-solid fa-star"></i>
          <a href="">(${p.voted})</a>
        </div>
        <h6 class="product-name">${p.name}</h6>
        <h6 class="product-price">${formatMoney(p.price)}</h6>
        <button class="product-add" onclick = 'addProductSell(${p.id})'>
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
        <div class="feature-wish" onclick='addProductFeatureToHeart(${p.id})'>
          <i class="fa-solid fa-heart"></i>
        </div>
        <a href="./page/deital.html?id=${p.id}">
          <img src=${p.images[0]} alt="">
        </a>
        <div class="feature-widget">
          <a href="https://www.youtube.com/watch?v=aRxymTETvXk" class="feature-video" data-vbtype="video" data-autoplay="true">
            <i class="fa-solid fa-play"></i>
          </a>
          <a href="./page/deital.html?id=${p.id}" class="feature-view">
            <i class="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>

      <div class="feature-content">
        <h6 class="feature-name">${p.name}</h6>
        <div class="feature-rating">
          <i class="${p.rating >=1 ?'active' :''} fa-solid fa-star"></i>
          <i class="${p.rating >=2 ?'active' :''} fa-solid fa-star"></i>
          <i class="${p.rating >=3 ?'active' :''} fa-solid fa-star"></i>
          <i class="${p.rating >=4 ?'active' :''} fa-solid fa-star"></i>
          <i class="${p.rating >=5 ?'active' :''} fa-solid fa-star"></i>
          <a href="">(${p.voted})</a>
        </div>
        <h6 class="feature-price">${formatMoney(p.price)}</h6>
        <p class="feature-desc">
          ${p.description}
        </p>
        <button class="feature-add" onclick = 'addProductFeature(${p.id})'>
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

// add product sell to heart-sidebar
let addProductSellToHeart = (id) =>{
  let product = products.find(p => p.id == id)
  let item ={
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
    count: 1
  }

  addProductToHeart(item)
  alert("Thêm vào sản phẩm yêu thích thành công")
  let productHeartSideBar = getDataHeartFromLocalStorage()
  renderHeartSidebarListProduct(productHeartSideBar)
  updateTotalHeartSidebar()
}

// add product feature to heart-sidebar
let addProductFeatureToHeart = (id) =>{
  let product = products.find(p => p.id == id)
  let item ={
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
    count: 1
  }

  addProductToHeart(item)
  alert("Thêm vào sản phẩm yêu thích thành công")
  let productHeartSideBar = getDataHeartFromLocalStorage()
  renderHeartSidebarListProduct(productHeartSideBar)
  updateTotalHeartSidebar()
}

// render product heart-sidebar
let productHeartSideBar = getDataHeartFromLocalStorage()
let heartSideBarListEle = document.querySelector(".heart-sidebar-list")

let renderHeartSidebarListProduct = (arr = []) =>{
  heartSideBarListEle.innerHTML = ""
  let html = ""
  if(arr.length == 0) {
    heartSideBarListEle.innerHTML = "Chưa có sản phẩm"
    return
  }

  arr.forEach((p) =>{
    html +=`<li class="heart-sidebar-item">
    <div class="heart-sidebar-image">
      <a href="./page/deital.html?id=${p.id}">
        <img src=${p.image} alt="">
      </a>
    </div>
    <div class="heart-sidebar-content">
      <div class="heart-sidebar-info">
        <h6>${p.name}</h6>
        <p>${formatMoney(p.price)}</p>
      </div>
      <div class="heart-sidebar-action-group">
        <button class="action-delete" onclick="removeProductHeart(${p.id})">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  </li>`
  })

  heartSideBarListEle.innerHTML = html
}

renderHeartSidebarListProduct(getDataHeartFromLocalStorage())

// remove item heart-sidebar
let removeProductHeart = (id) =>{
  let items = getDataHeartFromLocalStorage()
  let itemsNew = items.filter(p => p.id != id)
  setDataHeartToLocalStorage(itemsNew)
  renderHeartSidebarListProduct(itemsNew)
  updateTotalHeartSidebar()
}


// add product sell to cart-sidebar 
let addProductSell = (id) =>{
  let product = products.find(p => p.id == id)
  let item ={
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
    count: 1
  }

  addProductToCart(item)
  alert("Thêm vào giỏ hàng thành công")
  let productCartSideBar = getDataCartFromLocalStorage()
  renderCartSideBarListProduct(productCartSideBar)
  updateTotalCartSidebar()
}


// add product feature to cart-sidebar
let addProductFeature = (id) =>{
  let product = products.find(p => p.id == id)
  let item ={
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
    count: 1
  }

  addProductToCart(item)
  alert("Thêm vào giỏ hàng thành công")
  let productCartSideBar = getDataCartFromLocalStorage()
  renderCartSideBarListProduct(productCartSideBar)
  updateTotalCartSidebar()
}

// render product cart-sidebar
let productCartSideBar = getDataCartFromLocalStorage()
let cartSideBarListEle = document.querySelector(".cart-sidebar-list")

let renderCartSideBarListProduct = (arr =[]) => {
  cartSideBarListEle.innerHTML = ""
  let html = ""
  updateTotalMoneyCartSidebar(arr)
  if(arr.length == 0) {
    cartSideBarListEle.innerHTML = "Chưa có sản phẩm"
    return
  }

  arr.forEach((p) =>{
    html += `<li class="cart-sidebar-item">
    <div class="cart-sidebar-image">
      <a href="./page/deital.html?id=${p.id}">
        <img src=${p.image} alt="">
      </a>
    </div>
    <div class="cart-sidebar-content">
      <div class="cart-sidebar-info">
        <h6>${p.name}</h6>
        <p>${formatMoney(p.price)}</p>
      </div>
      <div class="cart-sidebar-action-group">
        <div class="product-action">
          <button class="action-minus" onclick = 'minusProduct(${p.id})'>
            <i class="fa-solid fa-minus"></i>
          </button>
          <input class="action-input" type="text" name="" id="" value="${p.count}">
          <button class="action-plus" onclick = 'plusProduct(${p.id})'>
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <button class="action-delete" onclick = 'removeProduct(${p.id})'>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  </li>`
  })

  cartSideBarListEle.innerHTML = html
  
}


// minus count cart-sidebar
let minusProduct = (id) =>{
  let items = getDataCartFromLocalStorage()
  let product = items.find(p => p.id == id)
  if(product.count > 1){
    product.count--
  }
  setDataCartToLocalStorage(items)
  renderCartSideBarListProduct(items)
}

// plus count cart-sidebar
let plusProduct = (id) =>{
  let items = getDataCartFromLocalStorage()
  let product = items.find(p => p.id == id)
  product.count++
  setDataCartToLocalStorage(items)
  renderCartSideBarListProduct(items)
}

// remove item cart-sidebar
let removeProduct = (id) =>{
  let items = getDataCartFromLocalStorage()
  let itemsNew = items.filter(p => p.id != id)
  setDataCartToLocalStorage(itemsNew)
  renderCartSideBarListProduct(itemsNew)
  updateTotalCartSidebar()
}

// Tổng tiền cart-sidebar
let totalMoneyCartSidebar = document.querySelector(".cart-sidebar-checkout-price")

let updateTotalMoneyCartSidebar = (arr =[]) =>{
  if(arr.length != 0){
    totalMoneyCartSidebar.style.display = "block"
    let total = arr.reduce((t,p) =>{
      return t + p.count*p.price
    },0)
    totalMoneyCartSidebar.innerHTML = formatMoney(total)
  } else {
    totalMoneyCartSidebar.style.display = "none"
  }
}

let updateTotalCartSidebar = () =>{
  let cart = getDataCartFromLocalStorage()
  document.querySelector(".cart-sidebar-total span").innerHTML = cart.length
  document.querySelector(".header-cart-number p").innerHTML = cart.length
}

let updateTotalHeartSidebar = () =>{
  let heart = getDataHeartFromLocalStorage()
  document.querySelector(".heart-sidebar-total span").innerHTML = heart.length
  document.querySelector(".header-heart-number p").innerHTML = heart.length
}

renderCartSideBarListProduct(productCartSideBar)
updateTotalCartSidebar()
updateTotalHeartSidebar()

// countdown
let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime()

let x = setInterval(() =>{
  let now = new Date().getTime();
    
  let distance = countDownDate - now;
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let countdownLock = document.querySelector(".countdown-clock")
  countdownLock.innerHTML = `<span class="countdown-time">
    <span>${days}</span>
    <small>Ngày</small>
  </span>
  <span span class="countdown-time">
    <span>${hours}</span>
    <small>Giờ</small>
  </span>
  <span class="countdown-time">
    <span>${minutes}</span>
    <small>Phút</small>
  </span>
  <span class="countdown-time">
    <span>${seconds}</span>
    <small>Giây</small>
  </span>`

  if (distance < 0) {
    clearInterval(x);
    countdownLock.innerHTML = "EXPIRED";
  }
},1000)

// venobox
new VenoBox({
  selector: '.product-video'
});
new VenoBox({
  selector: '.feature-video'
});