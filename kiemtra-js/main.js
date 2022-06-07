
// bài 1 :Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
// B1 : tạo mảng mới với các giá trị không trùng nhau
// B2 : so sánh mảng mới
// B3 : lấy giá trị lớn thư 2
function max2Numbers(arr=[]){
    let newArr =[]
    for (let i = 0; i < arr.length; i++) {
       if(newArr.indexOf(arr[i]) == -1){
           newArr.push(arr[i])
       }
    }

    newArr.sort((a,b)=>{
        return b-a
    })

    return newArr[1]
}



console.log(max2Numbers([2, 1, 3, 4]))

// bài 2 :
// B1 : sắp xếp lại mảng theo độ dài chuỗi giảm dần
// B2 : tạo mảng mới có 1 phần tử là phần tử lớn nhất của mảng cũ
// B3 : vòng lặp từ giá trị thứ 2 của mảng cũ,nếu có độ dài bằng giá trị đầu của mảng mới thì thêm giá trị đó vào mảng mới 



function getStringHasMaxLength(arr=[]){
    arr.sort((a,b) =>{
        return b.length -a.length
    })
    let newArr = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if(arr[0].length == arr[i].length){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))



// bài 3 :  Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
// Sử dụng splice() với chỉ số đầu tiên là 1 số ngẫu nhiên không lớn hơn độ dài mảng,chỉ số thứ 2 là 1 để cắt ra 1 phần tử sau chỉ số đầu tiên
function getRandomElement(arr=[]){
   return arr.splice(Math.floor(Math.random()*arr.length),1)
}

console.log(getRandomElement([3, 7, 9, 11]))



// bài 4:Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

// Sử dụng filter() với mảng 1 để kiểm tra từng giá trị của mảng 1 có nằm trong mảng 2 không? Nếu có thì lấy các giá trị đó

function similarity(arr1=[], arr2 =[]){
    return arr1.filter((e)=> {
        return arr2.indexOf(e) !== -1;
    });
}

console.log(similarity([1, 2, 3,], [3, 4, 5,]))


function getCountElement(arr){
    
}



// bài 6 :

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// 1.Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
// B1 : sử dụng filter() để lấy các đối tượng trong mảng có age > 25 rồi gán cho một mảng mới tên là newArr
// B2 : sử dụng tiếp filter() để lấy các đối tượng có isStatus == true trong newArr
function getUserAge(arr=[]){
    let newArr = arr.filter((e) =>{
        return e.age > 25
    })
    
    return newArr.filter((e)=>{
        return e.isStatus == true
    })
}

console.log(getUserAge(users))

// 2.Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
//  Sắp xếp mảng tăng dần theo age sử dụng sort()
function sortAge(arr = []){
    return arr.sort((a,b)=>{
        return a.age - b.age
    })
}
console.log(sortAge(users))




// bài 5 :Viết function truyền vào 2 tham số:
//Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
//Tham số 2: Là 1 số x <= 1000

// B1 : sử dụng split() tách chuỗi thành mảng xoá bỏ dấu ':' ngăn cách 
// B2 : đổi từng giá trị sang giây rồi cộng tổng
// B3 : đổi lại giá trị đó sang giờ,phút,giây
// B4 : trả về giá trị theo mẫu
function getTime(str='',x){
    let arr = str.split(':')
    let convertToSecond = arr[0]*3600 + arr[1]*60 + arr[2]*1 + x
    let h = Math.floor(convertToSecond/3600)
    let m = Math.floor(convertToSecond % 3600 / 60);
    let s = Math.floor(convertToSecond % 3600 % 60);
    
    return `${h}:${m}:${s}`
}

console.log(getTime("9:20:56", 7))

// bài 7 :Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

function getCountElement(arr=[]){
    let obj = {}
    let key = Object.keys(obj)
    for (let i = 0; i < arr.length; i++) {
        if(key.indexOf(arr[i]) == -1){
            obj[arr[i]] = 1
        }
    }
    for (let i = 0; i < key.length; i++) {
        if(arr.indexOf(key[i]) != -1){
            obj[key[i]] = i+1
        }
    }
    return obj
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))
