// detail.html?id=1 --> querystring
// detail.html?id=1&name=product1&price=1000000
// Lấy ra id trên url
let params = new URLSearchParams(window.location.search);
let id = params.get("id");

// Truy cập vào các thành phần
const breadcrumbItemActive = document.querySelector(".breadcrumb-item.active");
const nameEl = document.querySelector(".product-name");
const priceEl = document.querySelector(".product-price");
const sizeEl = document.querySelector(".product-size");
const descriptionEl = document.querySelector(".product-description");
const productSizeEl = document.querySelector(".product-size");

const btnMinusCount = document.querySelector(".btn-minus-count");
const btnPlusCount = document.querySelector(".btn-plus-count");
const countEl = document.querySelector(".count");

const btnAddToCart = document.querySelector(".btn-add-to-cart");

const mainCarouselEle = document.querySelector('#mainCarousel')
const thumbCarouselEle = document.querySelector('#thumbCarousel')
// Biến để lưu thông tin sản phẩm theo id
let product;
let count = 1;

// Kiểm tra xem id có tồn tại trên url hay không
// Nếu không có -> 404
if (id) {
    product = products.find(p => p.id == id);

    if (!product) {
        window.location.href = "./404.html";
    }

    document.title = product.name;
    breadcrumbItemActive.innerText = product.name;
} else {
    window.location.href = "./404.html";
}

// Hiển thị thông tin sản phẩm
const renderProduct = obj => {
    nameEl.innerText = obj.name;
    priceEl.innerText = formatMoney(obj.price);
    descriptionEl.innerText = obj.description;

    // Hiển thị size (duyệt mảng -> cộng chuỗi -> hiển thị)
    productSizeEl.innerHTML = product.sizes.map(size => {
        return `<span class="border py-2 px-3 border-dark me-2" onclick="choseSize(this)">${size}</span>`
    }).join("");

    // Hiển thị hình ảnh (duyệt mảng -> cộng chuỗi -> hiển thị)
}

// Chọn size;
const choseSize = ele => {
    // Cách 1:
    // const selectedEl = document.querySelector(".selected");
    // if(selectedEl) {
    //     selectedEl.classList.remove("selected", "bg-dark", "text-white");
    // }

    // Cách 2:
    const sizeEls = document.querySelectorAll(".product-size span");
    Array.from(sizeEls).map(size => size.classList.remove("selected", "bg-dark", "text-white"));

    ele.classList.add("selected", "bg-dark", "text-white");
}


btnPlusCount.addEventListener("click", () => {
    count++;
    countEl.innerText = count;
})

// Giảm số lượng
btnMinusCount.addEventListener("click", () => {
    count--;
    if (count < 1) {
        count = 1;
    }
    countEl.innerText = count;
})

// Hiển thị image
let renderMainCarouse = (arr=[]) =>{
    mainCarouselEle.innerHTML =''
    arr.forEach((image) =>{
        mainCarouselEle.insertAdjacentHTML('beforeend',`<div class="carousel__slide" data-src="${image}"
        data-fancybox="gallery">
        <img src="${image}" />
    </div>`)
    })
}
renderMainCarouse(product.images)

let renderThumbCarouse = (arr=[]) =>{
    thumbCarouselEle.innerHTML =''
    arr.forEach((image) =>{
        thumbCarouselEle.insertAdjacentHTML('beforeend',`<div class="carousel__slide">
        <img class="panzoom__content" onclick = "chooseImage(this)" src="${image}" />
    </div>`)
    })
}
renderThumbCarouse(product.images)


// chọn ảnh
let chooseImage = (ele) => {
    // const imageEle = document.querySelectorAll(".panzoom__content")
    // Array.from(imageEle).map(image => image.classList.remove('transform'))
    // ele.classList.add('transform')
}


// Thêm vào giỏ hàng
btnAddToCart.addEventListener("click", () => {
    // Kiểm tra xem đã chọn size hay chưa
    const sizeSelectedEl = document.querySelector(".product-size .selected");
    // const imageSlectedEl = document.querySelector('#thumbCarousel .transform')
    if (!sizeSelectedEl) {
        alert("Vui lòng chọn size trước khi thêm vào giỏ hàng");
        return;
    } 

    // Cấu trúc item thêm vào giỏ hàng
    let item = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        count: count,
        size: sizeSelectedEl.innerText,
    }

    // Thêm vào giỏ hàng
    addItemToAdd(item);
    alert("Thêm vào giỏ hàng thành công");
})

// Format tiền - VND
const formatMoney = number => {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

renderProduct(product);

// Initialise Carousel ********************************
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
        target: mainCarousel,
        friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
        on: {
            change: (that) => {
                mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                    friction: 0,
                });
            },
        },
    },
});