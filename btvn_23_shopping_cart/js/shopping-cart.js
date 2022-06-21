
// render cart
let item = getDataFromLocalStorage()
let productCardListEle = document.querySelector('.product-list')
let pEleMessage = document.querySelector('.fst-italic')

let renderProductCart = (arr=[]) =>{
    productCardListEle.innerHTML = ''
    if(arr.length == 0){
        pEleMessage.style.display = 'block'
        return
    }

    pEleMessage.style.display = 'none'
    arr.forEach((e) =>{
        productCardListEle.insertAdjacentHTML('beforeend',`<div class="product-item d-flex border mb-4">
        <div class="image">
            <img src="${e.image}" alt="" />
        </div>
        <div class="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
            <div>
                <div class="d-flex justify-content-between align-items-center">
                    <h2 class="text-dark fs-5 fw-normal">
                        ${e.name} (${e.size})
                    </h2>
                    <h2 class="text-danger fs-5 fw-normal">
                        ${formatMoney(e.price)} VND
                    </h2>
                </div>
                <p class="text-black-50">
                    <span class="border d-inline-block me-3">
                        <span class="py-2 px-3 d-inline-block fw-bold bg-light" onclick = "minusProduct(${e.id},'${e.size}')">-</span>
                        <span class="py-2 px-3 d-inline-block fw-bold">${e.count}</span>
                        <span class="py-2 px-3 d-inline-block fw-bold bg-light" onclick = "plusProduct(${e.id},'${e.size}')">+</span>
                    </span>
                </p>
            </div>
            <div>
                <button class="text-primary border-0 bg-transparent fw-light">
                    <span><i class="fa-solid fa-trash-can" onclick = "removeProduct(${e.id},'${e.size}')"></i></span>
                    Xóa
                </button>
            </div>
        </div>
    </div>`)
    })

    updateTotalMoney(arr)
}

const formatMoney = number => {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

const removeProduct = (id,size) =>{
    let isConfirm = confirm('bạn có muốn xoá không')
    if(isConfirm){
        // Tìm kiếm sp trùng id và size
        item = item.filter(p => p.id != id || p.size != size)
        setDataToLocalStorage(item)
        updateTotalCart()
        renderProductCart(item)
    }
}
// let product = item.find(p => p.id == id || p.size == size)
// console.log(product)
const plusProduct = (id,size) =>{   
    let product = item.find(p => p.id == id && p.size == size)
    product.count++
    setDataToLocalStorage(item)
    renderProductCart(item)
}

const minusProduct = (id,size) =>{
    let product = item.find(p => p.id == id && p.size == size)
    if(product.count > 1){
        product.count--
    }
    setDataToLocalStorage(item)
    renderProductCart(item)
}

// tạm tính tiền
let subTotalMoney = document.querySelector('#sub-total-money')
let totalMoney = document.querySelector('#total-money')

let updateTotalMoney = (arr = []) =>{
    let billEle = document.querySelector('.bill')
    if(arr.length != 0){
        billEle.style.display = 'block'
        let total = arr.reduce((t,e) =>{
            return t + e.price * e.count
        },0)
        subTotalMoney.innerText = total
        totalMoney.innerText = total       
    } else {
         billEle.style.display = 'none'
    }
}

// áp dụng mã giảm giá
// Danh sách promotion code (Mã giảm giá)
let promotionCode = {
    GIAM10 : 10,
    GIAM20 : 20,
    GIAM30 : 30,
    GIAM40 : 40,
}

let discountMoney = document.querySelector('#discount-money')
let discountFormInput = document.querySelector('#discount-form-input')
let buttonApply = document.querySelector('#btn-apply')

let giamGia = () =>{
    let maGiamGia = discountFormInput.value
    if(!maGiamGia)
    {
        alert('chưa nhập mã giảm giá')
    } else{
        if(!promotionCode[maGiamGia]){
            alert('nhập sai mã giảm giá')
        } else{
            discountMoney.parentNode.classList.remove('d-none')
            discountMoney.innerText = (subTotalMoney.innerText * promotionCode[maGiamGia])/100
            totalMoney.innerText = subTotalMoney.innerText - discountMoney.innerText
        } 
    }
}
buttonApply.addEventListener('click',(e) =>{
    giamGia()
})

renderProductCart(item)
