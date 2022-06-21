// key = "cart"
// value = array
// Thêm vào localStorage
const setDataToLocalStorage = arr => {
    localStorage.setItem("cart", JSON.stringify(arr));
}

// Lấy ra từ localStorage
const getDataFromLocalStorage = () => {
    const localStorageValue = localStorage.getItem("cart");
    if(localStorageValue) {
        return JSON.parse(localStorageValue)
    } else {
        return [];
    }
}

// Cấu trúc giỏ hàng
// const cart = [
//     {
//         id
//         name
//         price
//         image
//         count
//         size
//     }
// ]

const addItemToAdd = item => {
    // TH1 : Id chưa có trong giỏ hàng => thêm mới
    // TH2 : Id đã tồn tại và size chưa tồn tại => Thêm mới
    // TH3 : Id và size tồn tại => Cập nhật số lượng

    // Lấy cart từ localStorage
    let cart = getDataFromLocalStorage();
    // Nếu cart không tồn tại -> tạo mới
    if(cart.length == 0) {
        cart.push(item);
    } else {
        // Tìm kiếm sản phẩm đã tồn tại trong giỏ hàng hay chưa
        let product = cart.find(p => p.id == item.id && p.size == item.size);

        // Nếu chưa tồn tại -> thêm vào
        // Nếu tồn tại -> cập nhật số lượng
        if(!product) {
            cart.push(item);
        } else {
            product.count += item.count;
        }
    }

    // Lưu dữ liệu của cart sau khi thêm vào localStorage
    setDataToLocalStorage(cart);

    // Cập nhật lại số lượng trên giao diện
    updateTotalCart();
}


const updateTotalCart = () => {
    // Lấy cart từ localStorage
    let cart = getDataFromLocalStorage();
    document.querySelector(".cart-count").innerText = cart.length;
}

updateTotalCart();