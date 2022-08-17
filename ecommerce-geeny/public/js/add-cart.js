
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

// add product to heart
let setDataHeartToLocalStorage = (arr) =>{
    localStorage.setItem("heart", JSON.stringify(arr));
}

let getDataHeartFromLocalStorage = (arr) =>{
    let localStorageValue = localStorage.getItem("heart");
    if(localStorageValue) {
        return JSON.parse(localStorageValue)
    } else {
        return [];
    }
}

let addProductToHeart = (item) =>{
    let heart = getDataHeartFromLocalStorage()
    if(heart.length == 0){
        heart.push(item)
    } else{
        let productHeart = heart.find(p => p.id == item.id)
        if(!productHeart){
            heart.push(item)
        } else{
            productHeart.count += item.count
        }
    }

    setDataHeartToLocalStorage(heart) 
}