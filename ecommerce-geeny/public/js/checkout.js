
// cart sidebar

let headerCart = document.querySelector(".header-cart")
let cartSidebarClose = document.querySelector(".cart-sidebar-close")
let cartSidebar = document.querySelector(".cart-sidebar")
console.log(headerCart)
console.log(cartSidebar)
console.log(headerCart)
headerCart.addEventListener("click",() =>{
  cartSidebar.classList.add("cart-sidebar-active")
})

cartSidebarClose.addEventListener('click',() =>{
  cartSidebar.classList.remove("cart-sidebar-active")
})