
let setDataCartToLocalStorage = (arr) =>{
    localStorage.setItem("cart", JSON.stringify(arr));
}

let getDataCartFromLocalStorage = (arr) =>{
    let localStorageValue = localStorage.getItem("cart");
    if(localStorageValue) {
        return JSON.parse(localStorageValue)
    } else {
        return [];
    }
}



let addProductToCart = (item) =>{
    let cart = getDataCartFromLocalStorage()
    if(cart.length == 0){
        cart.push(item)
    } else{
        let productCart = cart.find(p => p.id == item.id)
        if(!productCart){
            cart.push(item)
        } else{
            productCart.count += item.count
        }
    }

    setDataCartToLocalStorage(cart) 
}

// formatMoney
const formatMoney = number => {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}