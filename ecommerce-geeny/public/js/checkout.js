
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
        <p>${formatMoney(p.price)}</p>
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
      <a href="../page/deital.html?id=${p.id}">
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
        <p class="order-product-price">${formatMoney(p.price)}</p>
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
    totalMoneyCartSidebar.innerHTML = formatMoney(total)
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
    subTotalMoney.innerHTML = formatMoney(total)
    totalMoney.innerHTML = formatMoney(total)
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
  let items = getDataCartFromLocalStorage()
  let subTotal = items.reduce((t,p) =>{
    return t + p.count*p.price
  },0)
  let discountCode = inputDiscountMoney.value
  if(!discountCode){
    alert("Chưa nhập mã giảm giá")
  }else{
    if(!promotionCode[discountCode]){
      alert("Mã giảm giá chưa chính xác")
    } else {
      discountMoney.parentNode.style.display = "flex"
      discount = (subTotal * promotionCode[discountCode]) / 100
      discountMoney.innerHTML = formatMoney(discount)
      totalMoney.innerHTML = formatMoney(subTotal - discount)
    }
  }
})



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
renderProductCheckout(productCheckout)
updateTotalCartSidebar()
updateTotalHeartSidebar()


// select provinces

let citisELe = document.getElementById("citis")
let districtsEle = document.getElementById("district")  
let wardsEle = document.getElementById("ward")

let getApiProvinces = async() =>{
  try{
    let res = await axios.get("https://provinces.open-api.vn/api/?depth=3")
    let citis = res.data

    renderCitis(citis)

  } catch(error){
    console.log(error)
  }
}

let renderCitis = (arr) =>{
  arr.forEach((c) =>{
    citisELe.insertAdjacentHTML('beforeend',`<option value="${c.name}">${c.name}</option>`)
  })

  citisELe.addEventListener("change", (e) =>{
    districtsEle.length = 1
    wardsEle.length = 1

    let districtData = arr.filter((c) => c.name == e.target.value)[0].districts
    districtData.forEach((d) =>{
      districtsEle.insertAdjacentHTML("beforeend",`<option value="${d.name}">${d.name}</option>`)
    })

  })

  districtsEle.addEventListener("change",(e) =>{
    wardsEle.length = 1
    let districtData = arr.filter((c) => c.name == citisELe.value)[0].districts
    let ward = districtData.filter((w) => w.name == districtsEle.value)[0].wards
    ward.forEach((w) =>{
      wardsEle.insertAdjacentHTML("beforeend",`<option value="${w.name}">${w.name}</option>`)
    })
  })
}

getApiProvinces()

// validate checkout

let fullName = document.getElementById("fullname")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let address = document.getElementById("address")
let note = document.getElementById("note")
let citis = document.getElementById("citis")
let district = document.getElementById("district")
let ward = document.getElementById("ward")
let btnCheckout = document.querySelector(".confirm button")
let inputEles = document.querySelectorAll('.info-ship-input');
let paymentRadio = document.querySelectorAll("#payments")

btnCheckout.addEventListener("click", (e) =>{
  Array.from(inputEles).map((ele) =>
    ele.classList.remove('success', 'error')
  );

  let isValid = checkValidate();
  if(isValid){
    alert("Thanh toán thành công")
    window.location.href = "../index.html"
  }
})

let checkValidate =() =>{
  let isCheck = true
  let fullNameValue = fullName.value
  let emailValue = email.value
  let phoneValue = phone.value
  let addressValue = address.value
  let citisValue = citis.value
  let districtValue = district.value
  let wardvalue = ward.value

  if(fullNameValue == ''){
    setError(fullName, 'Tên không được để trống');
    isCheck = false;
  }else {
    setSuccess(fullName);
  } 

  if (emailValue == '') {
    setError(email, 'Email không được để trống');
    isCheck = false;
  } else if (!isEmail(emailValue)) {
    setError(email, 'Email không đúng định dạng');
    isCheck = false;
  } else {
    setSuccess(email);
  }

  if (phoneValue == '') {
    setError(phone, 'Số điện thoại không được để trống');
    isCheck = false;
  }else if (!isPhone(phoneValue)) {
    setError(phone, 'Số điện thoại không đúng định dạng');
    isCheck = false;
  }else {
    setSuccess(phone);
  }

  if(addressValue == ''){
    setError(address, 'Địa chỉ không được để chống');
    isCheck = false;
  }else {
    setSuccess(address);
  } 

  if(citisValue == ''){
    setError(citis, 'Tỉnh thành không được để chống');
    isCheck = false;
  }else {
    setSuccess(citis);
  } 

  if(districtValue== ''){
    setError(district, 'Tỉnh thành không được để chống');
    isCheck = false;
  }else {
    setSuccess(district);
  } 

  if(wardvalue== ''){
    setError(ward, 'Tỉnh thành không được để chống');
    isCheck = false;
  }else {
    setSuccess(ward);
  } 

  return isCheck
}


function setSuccess(ele) {
  ele.parentNode.classList.add('success');
}

function setError(ele, message) {
  let parentEle = ele.parentNode;
  parentEle.classList.add('error');
  parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
  );
}

function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}