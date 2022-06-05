

// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// bài1 

function showInfoProduct(arr = []){
    let inFo = arr.map((e) =>{
        return `${e.name}-${e.price}-${e.brand}-${e.count}`
    })
    return inFo
}
 
 console.log(showInfoProduct(products))

 // bài2

function getTotalMoney(arr = []){
   return arr.reduce((total,elem) =>{
        return total + elem.price*elem.count
    },0)
}
 
 console.log(getTotalMoney(products))

 // bài3

 function findProductByBrand(arr = []){
    return arr.filter((e) => {
        return e.brand === 'Apple'
     })
 }
 
 console.log(findProductByBrand(products))

 // bài4

 function findProductByPrice(arr = [], money) {
    return arr.filter((e) => {
        return e.price > money
     })
 }
 
 console.log(findProductByPrice(products, 20000000))

 // bài5

 function findProductByName(arr = [],name =''){
    return arr.filter((e) => {
        return e.name.toLowerCase().indexOf(name) != -1
    })
 }
 
 console.log(findProductByName(products,'pro'))

 // bài6 

 function moreProducts(arr = [],a){
    arr.push(a)
    return arr
 }

 console.log(moreProducts(products,{
    name: "Xiaomi 12 pro",
    price: 22000000,
    brand: "Xiaomi",
    count: 1,
 }))

 // bài7

 function deleteProduct(arr = [],name) {
    arr.forEach((e,i) => {
        if(e.brand == name){
            arr.splice(i,1)
        }
    })
    return arr
 }

 console.log(deleteProduct(products,'Samsung'))

 //bài8 

 function sortUp(arr =[]){
    return arr.sort((a,b) => {
         return a.price -b.price
    })
 }

 console.log(sortUp(products))

 // bài9 

 function sortDescending(arr = []){
    return arr.sort((a,b) =>{
        return b.price - a.price
    })
 }
 
 console.log(sortDescending(products))

// bài10

 function randomProduct(arr = []){
     arr.splice((Math.random()*arr.length),1)
     arr.splice((Math.random()*arr.length),1)
     return arr
 }
console.log(randomProduct(products))


