
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
    if(i<=30){
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
Array.from(inputTags).forEach((input) =>{
  input.addEventListener("change",(e) =>{
    let inputValue = e.target.value
    if(e.target.checked == true){
      let productFilterTrue = products.filter((p) =>{
        return p.tag == inputValue
      })
      productFilterTag = productFilterTag.concat(productFilterTrue)
      renderProductShop(productFilterTag)
    } else{
      productFilterTag = productFilterTag.filter((p) =>{
        return p.tag != inputValue
      })
      renderProductShop(productFilterTag)
    }
  })
})

// filter by category
let inputCategorys = document.querySelectorAll(".checkbox-category")
let productFilterCategory = []
Array.from(inputCategorys).forEach((input) =>{
  input.addEventListener("change",(e) =>{
    let inputValue = e.target.value
    if(e.target.checked == true){
      let productFilterTrue = products.filter((p) =>{
        return p.category == inputValue
      })
      productFilterCategory = productFilterCategory.concat(productFilterTrue)
      renderProductShop(productFilterCategory)
    } else{
      productFilterCategory = productFilterCategory.filter((p) =>{
        return p.category != inputValue
      })
      renderProductShop(productFilterCategory)
    }
  })
})

// filter by rating
let inputRating = document.querySelectorAll(".checkbox-rating")
let productFilterRating = []
Array.from(inputRating).forEach((input) =>{
  input.addEventListener("change",(e) =>{
    let inputValue = e.target.value
    if(e.target.checked == true){
      let productFilterTrue = products.filter((p) =>{
        return p.rating == inputValue
      })
      productFilterRating = productFilterRating.concat(productFilterTrue)
      renderProductShop(productFilterRating)
    } else{
      productFilterRating = productFilterRating.filter((p) =>{
        return p.rating != inputValue
      })
      renderProductShop(productFilterRating)
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