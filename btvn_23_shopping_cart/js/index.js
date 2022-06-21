
// Truy cập các thành phần
let productListEle = document.querySelector('.product-list')
let seachFormInputEle = document.querySelector('.seach-form-input')
let btnSearch = document.querySelector('.seach-form-button')

// Tìm kiếm sản phẩm
seachFormInputEle.addEventListener('keydown',(e) =>{
    if(e.keyCode == 13){
        searchProduct()
    }
})

btnSearch.addEventListener("click", () => {
    searchProduct();
})

let searchProduct = () =>{
    let value = seachFormInputEle.value
    if(value == ''){
        alert('Không được trống')
        return
    }
    let productFilter = products.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))
    renderProduct(productFilter)
}

// Hiển thị danh sách sản phẩm

let renderProduct = (arr = []) =>{
    productListEle.innerHTML = ''
    // Kiểm tra có sản phẩm không
    let html = ''
    arr.forEach((p) =>{
        html += `<div class="col-md-3">
        <a href="./detail.html?id=${p.id}">
            <div class="product-item shadow-sm rounded mb-4">
                <div class="product-item-image">
                    <img src="${p.images}"
                        alt="${p.name}">
                </div>
                <div class="product-item-info p-3">
                    <h2 class="fs-5 mb-4 text-dark">${p.name}</h2>
                    <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                        <p class="type fs-5 text-danger fw-normal">${formatMoney(p.price)} VND</p>
                        <p class="rating">
                            ${p.rating} <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>`
    })
    productListEle.innerHTML = html

}

let formatMoney = (number) =>{
    return number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

renderProduct(products)