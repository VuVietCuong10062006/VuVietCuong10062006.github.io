
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

// render User
const getDataInfoUserFromLocalStorage = () => {
  const localStorageValue = localStorage.getItem("infoUser");
  if(localStorageValue) {
      return JSON.parse(localStorageValue)
  } else {
      return []
  }
}


let headerAccount = document.querySelector(".header-content :nth-child(4)")
let headerAccountClone = document.querySelector(".header-account-clone")

let renderHeaderAccount = (arr = []) => {
  if(arr.length !== 0){
    headerAccount.innerHTML = ""
    let html = ""
    arr.forEach((p) =>{
      html += `<img src=${p.imageUser} alt="Account">`
    })
    headerAccount.innerHTML = html
  }
}

let renderHeaderAccountClone = (arr = []) => {
  if(arr.length !== 0){
    headerAccountClone.innerHTML = ""
    let html = ""
    arr.forEach((p) =>{
      html += `<img src=${p.imageUser} alt="Account">`
    })
    headerAccountClone.innerHTML = html
  }
}


renderHeaderAccountClone(getDataInfoUserFromLocalStorage())
renderHeaderAccount(getDataInfoUserFromLocalStorage())

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


// render product
let productList = document.querySelector(".shop-product-list")




let renderProductShop = (arr = []) =>{
  productList.innerHTML = ""
  let html = ""
  arr.forEach((p,i) =>{
    if(i >= start && i < end){
      html += `<div class="col">
      <div class="product-card">
          <div class="product-image">
            <div class="product-label">
              <label>${p.tag}</label>
            </div>
            <div class="product-wish">
              <i class="fa-solid fa-heart"></i>
            </div>
            <a href="./deital.html?id=${p.id}">
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
              <i class="${p.rating >=1 ?'active' :''} fa-solid fa-star"></i>
              <i class="${p.rating >=2 ?'active' :''} fa-solid fa-star"></i>
              <i class="${p.rating >=3 ?'active' :''} fa-solid fa-star"></i>
              <i class="${p.rating >=4 ?'active' :''} fa-solid fa-star"></i>
              <i class="${p.rating >=5 ?'active' :''} fa-solid fa-star"></i>
              <a href="">(3)</a>
            </div>
            <h6 class="product-name">${p.name}</h6>
            <h6 class="product-price">${p.price}</h6>
            <button class="product-add" onclick = 'addProductShop(${p.id})'>
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

// pagination
let btnNext = document.querySelector(".btn-next")
let btnPrev = document.querySelector(".btn-prev")

let perPage = 8
let currentPage = 1
let start = 0
let end = perPage 
let totalPage = Math.ceil(products.length / perPage)


let renderListPage = () =>{
  for(i=1; i <= totalPage; i++){
    btnNext.insertAdjacentHTML("beforebegin",`<li class="pagination-item pagination-page ${i == 1 ? 'pagination-item-active' :''}">${i}
    </li>`)
  }
}
renderListPage()


let btnPage = document.querySelectorAll(".pagination-page")

Array.from(btnPage).forEach((page,i) =>{
  page.addEventListener("click", (e) => {
    let pageActive = document.querySelectorAll(".pagination-item-active")
    Array.from(pageActive).forEach((p) =>{
      p.classList.remove("pagination-item-active")
    })
    e.target.classList.add("pagination-item-active")
    currentPage = i+1
    start = (currentPage - 1)*perPage
    end = currentPage*perPage
    renderProductShop(products)
  })
})


btnNext.addEventListener("click", (e) =>{
  currentPage++
  if(currentPage > totalPage){
    currentPage = totalPage
  }

  Array.from(btnPage).forEach((page,i) =>{
    if(i == currentPage-1){
      page.classList.add("pagination-item-active")
    }else{
      page.classList.remove("pagination-item-active")
    }
  })

  start = (currentPage - 1)*perPage
  end = currentPage*perPage
  renderProductShop(products)
})

btnPrev.addEventListener("click", (e) =>{
  currentPage--
  if(currentPage <= 1){
    currentPage = 1
  }

  Array.from(btnPage).forEach((page,i) =>{
    if(i == currentPage-1){
      page.classList.add("pagination-item-active")
    }else{
      page.classList.remove("pagination-item-active")
    }
  })

  start = (currentPage - 1)*perPage
  end = currentPage*perPage
  renderProductShop(products)
})

renderProductShop(products)


// filter by price
let searchPriceMinInput = document.querySelector(".search-price-min")
let searchPriceMaxInput = document.querySelector(".search-price-max")
let btnSearchPrice = document.querySelector(".btn-search-price")

btnSearchPrice.addEventListener("click",() =>{
  searchProductPrice()
})
let searchProductPrice = () =>{
  let valueMin = searchPriceMinInput.value
  let valueMax = searchPriceMaxInput.value
  let productFilter = products.filter((p) =>{
    return p.price >= valueMin && p.price <= valueMax
  })
  renderProductShop(productFilter)
}

// filter by tag
let inputTags = document.querySelectorAll(".checkbox-tag")
let productFilterTag = []
let checkedNumberTag = 0
Array.from(inputTags).forEach((input) =>{
  input.addEventListener("change",(e) =>{
    let inputValue = e.target.value
    if(e.target.checked == true){
      checkedNumberTag ++
      let productFilterTrue = products.filter((p) =>{
        return p.tag == inputValue
      })
      productFilterTag = productFilterTag.concat(productFilterTrue)
      renderProductShop(productFilterTag)
    } else{
      checkedNumberTag --
      productFilterTag = productFilterTag.filter((p) =>{
        return p.tag != inputValue
      })
      renderProductShop(productFilterTag)
    }

    if(checkedNumberTag == 0){
      renderProductShop(products)
    }
  })
})

// filter by category
let inputCategorys = document.querySelectorAll(".checkbox-category")
let productFilterCategory = []
let checkedNumberCategory = 0
Array.from(inputCategorys).forEach((input) =>{
  input.addEventListener("change",(e) =>{
    let inputValue = e.target.value
    if(e.target.checked == true){
      checkedNumberCategory ++
      let productFilterTrue = products.filter((p) =>{
        return p.category == inputValue
      })
      productFilterCategory = productFilterCategory.concat(productFilterTrue)
      renderProductShop(productFilterCategory)
    } else{
      checkedNumberCategory --
      productFilterCategory = productFilterCategory.filter((p) =>{
        return p.category != inputValue
      })
      renderProductShop(productFilterCategory)
    }

    if(checkedNumberCategory == 0){
      renderProductShop(products)
    }
  })
})

// filter by rating
let inputRating = document.querySelectorAll(".checkbox-rating")
let productFilterRating = []
let checkedNumberRating = 0
Array.from(inputRating).forEach((input) =>{
  input.addEventListener("change",(e) =>{
    let inputValue = e.target.value
    if(e.target.checked == true){
      checkedNumberRating ++
      let productFilterTrue = products.filter((p) =>{
        return p.rating == inputValue
      })
      productFilterRating = productFilterRating.concat(productFilterTrue)
      renderProductShop(productFilterRating)
    } else{
      checkedNumberRating --
      productFilterRating = productFilterRating.filter((p) =>{
        return p.rating != inputValue
      })
      renderProductShop(productFilterRating)
    }

    if(checkedNumberRating == 0){
      renderProductShop(products)
    }
  })
})

// select option 
let selectOptionEle = document.querySelector(".select-option")
selectOptionEle.addEventListener("change", (e) =>{
  if(e.target.value == 1){
    let productSortUp = products.sort((a,b) =>{
      return a.price - b.price
    }) 
    renderProductShop(productSortUp)
  } else if(e.target.value == 2){
    let productSortDown = products.sort((a,b) =>{
      return b.price - a.price
    })
    renderProductShop(productSortDown)
  } 
})

// add productShop to cart-sidebar
let addProductShop = (id) =>{
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
    totalMoneyCartSidebar.innerHTML = total
  } else {
    totalMoneyCartSidebar.style.display = "none"
  }
}


let updateTotalCartSidebar = () =>{
  let cart = getDataCartFromLocalStorage()
  document.querySelector(".cart-sidebar-total span").innerHTML = cart.length
  document.querySelector(".header-cart-number p").innerHTML = cart.length
}

renderCartSideBarListProduct(productCartSideBar)
updateTotalCartSidebar()