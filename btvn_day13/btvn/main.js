
// bài 1 :Tìm số lớn nhất trong mảng 

function maxArray(arr=[]){
    arr.sort(function(a, b){return a - b});
    return arr[arr.length-1]
}
console.log(maxArray([-4,3,2,-1]))

// bài 2 : Tìm số nhỏ nhất trong mảng

function minArray(arr=[]){
    arr.sort(function(a, b){return a - b});
    return arr[0]
}
console.log(minArray([-4,3,2,-1]))

// bài 3 : Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

function divideArray(arr=[]){
    for (let i = 0; i <= arr.length-1; i++) {
        arr[i]=arr[i]%2
    }
    return arr
}

console.log(divideArray([3,-3,4,6,5]))

// bài 4 : Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần

function repeatString(str = 'a'){
    str = str.split(' ')
    let str2 = []
    for (let i = 0; i <= 9; i++) {
        str2 = str2.concat(str)
    }
    return str2.join('')
}
console.log(repeatString('a'))

// bai 5 :
function repeatString2(str = 'a'){
    str = str.split(' ')
    let str2 = []
    for (let i = 0; i <= 9; i++) {
        str2 = str2.concat(str)
    }
    return str2.join('-')
}
console.log(repeatString2('a'))
