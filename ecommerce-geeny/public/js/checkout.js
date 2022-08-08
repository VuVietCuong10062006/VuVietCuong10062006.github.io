
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
    <a href="../page/deital.html?id=${p.id}">
      <div class="search-product-image">
        <img src=${p.images[0]} alt="">
      </div>
      <div class="search-product-content">
        <h6>${p.name}</h6>
        <p>${p.price}</p>
      </div>
    </a>
    </li>`
  })
  searchProductList.innerHTML =html
}

renderSearchProducList(products)

headerSearchInput.addEventListener("input",(e) =>{
  searchProductHeader()
})

let searchProductHeader = () =>{
  let inputValue = headerSearchInput.value
  let productFilter = products.filter(p => p.name.toLowerCase().includes(inputValue.toLowerCase()))
  renderSearchProducList(productFilter)
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
      <a href="../page/deital.html?id=${p.id}">
        <img src=${p.image} alt="">
      </a>
    </div>
    <div class="cart-sidebar-content">
      <div class="cart-sidebar-info">
        <h6>${p.name}</h6>
        <p>${p.price}</p>
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



// render product checkout
let productCheckout = getDataCartFromLocalStorage()
let checkoutListProductEle = document.querySelector(".order-product-list")

let renderProductCheckout = (arr =[])=>{
  checkoutListProductEle.innerHTML = ""
  let html = ""
  updateTotalMoney(arr)

  if(arr.length == 0){
    checkoutListProductEle.innerHTML = "Chưa có sản phẩm"
    return
  }

  arr.forEach((p) =>{
    html += `<li class="order-product-item">
    <div class="order-product-image">
        <a href="./deital.html?id=${p.id}">
            <img src=${p.image} alt="">
        </a>
        <span class="order-product-number">${p.count}</span>
    </div>
    <div class="order-product-content">
        <h6 class="order-product-name">${p.name}</h6>
        <p class="order-product-price">${p.price}</p>
    </div>
    </li>`
  })
  checkoutListProductEle.innerHTML = html
  
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
  renderProductCheckout(items)
}

// plus count cart-sidebar
let plusProduct = (id) =>{
  let items = getDataCartFromLocalStorage()
  let product = items.find(p => p.id == id)
  product.count++
  setDataCartToLocalStorage(items)
  renderCartSideBarListProduct(items)
  renderProductCheckout(items)
}

// remove item cart-sidebar
let removeProduct = (id) =>{
  let items = getDataCartFromLocalStorage()
  let itemsNew = items.filter(p => p.id != id)
  setDataCartToLocalStorage(itemsNew)
  renderCartSideBarListProduct(itemsNew)
  renderProductCheckout(itemsNew)
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
    totalMoneyCartSidebar.innerHTML = total
  } else {
    totalMoneyCartSidebar.style.display = "none"
  }
}


// tạm tính tiền checkout
let subTotalMoney = document.querySelector(".sub-total-money")
let totalMoney = document.querySelector(".total-money")

let updateTotalMoney = (arr = []) =>{
  let orderBillEle = document.querySelector(".order-bill")
  let discountBillEle = document.querySelector(".order-discount-btn")
  if(arr.length != 0){
    orderBillEle.style.display = "block"
    discountBillEle.style.display = "flex"
    let total = arr.reduce((t,p) =>{
      return t + p.count*p.price
    },0)
    subTotalMoney.innerHTML = total
    totalMoney.innerHTML = total
  } else{
    orderBillEle.style.display = "none"
    discountBillEle.style.display = "none"
  }
}

// Áp dụng mã giảm giá checkout

// Danh sách mã giảm giá
let promotionCode = {
  GIAM10 : 10,
  GIAM20 : 20,
  GIAM30 : 30,
  GIAM40 : 40,
}

let discountMoney = document.querySelector(".discount-money")
let inputDiscountMoney = document.querySelector(".order-discount-btn input")
let buttonDiscountMoney = document.querySelector(".order-discount-btn button")
discountMoney.parentNode.style.display = "none"

buttonDiscountMoney.addEventListener("click", () =>{
  let discountCode = inputDiscountMoney.value
  if(!discountCode){
    alert("Chưa nhập mã giảm giá")
  }else{
    if(!promotionCode[discountCode]){
      alert("Mã giảm giá chưa chính xác")
    } else {
      discountMoney.parentNode.style.display = "flex"
      discountMoney.innerHTML = (subTotalMoney.innerHTML * promotionCode[discountCode]) / 100
      totalMoney.innerHTML = subTotalMoney.innerHTML - discountMoney.innerHTML
    }
  }
})



let updateTotalCartSidebar = () =>{
  let cart = getDataCartFromLocalStorage()
  document.querySelector(".cart-sidebar-total span").innerHTML = cart.length
  document.querySelector(".header-cart-number p").innerHTML = cart.length
}

renderCartSideBarListProduct(productCartSideBar)
renderProductCheckout(productCheckout)
updateTotalCartSidebar()
