
 

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
    account.innerHTML = `<a href="../page/login.html" class="header-account">
    <img src="../public/image/logo/user.png" alt="Account">
    </a>
    <div class="action">
    <div class="info">
      <img src="../public/image/avatar/avatar-1.jpg" alt="">
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
    accountClone.innerHTML = `<a href="../page/login.html" class="header-account header-account-clone">
    <img src="../public/image/logo/user.png" alt="Account">
    </a>
    <div class="action">
    <div class="info">
      <img src="../public/image/avatar/avatar-1.jpg" alt="">
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


//

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
  <a href="https://www.youtube.com/watch?v=aRxymTETvXk" class="play-video" data-vbtype="video" data-autoplay="true">
  <i class="fa-solid fa-circle-play"></i>
  </a>`
}

renderImageVideo(product.images)

// add product to cart
let btnAddToCart = document.querySelector(".details-add")

btnAddToCart.addEventListener("click", () =>{
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
})

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


// venobox
new VenoBox({
  selector: '.play-video'
});

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