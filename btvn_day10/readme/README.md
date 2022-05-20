# **Buổi10 :Function + Câu lệnh điều kiện**

## **1.Function**

### **Function là gì?**

Function (hàm) là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào đó.

Cú pháp định nghĩa function

```js
function functionName(para_1, ..., para_n) {
 // code thực thi function
}
```

Thực thi function

```js
functionName(para_1, ..., para_n)
```
### **Phân biệt tham số (parameter) và đối số (argument)**

* **Tham số (parameter)** là biến trong khai báo hàm.
* **Đối số (argument)** là giá trị thực của biến này được truyền vào hàm.

## **2.Các loại function thường gặp**

### **Một số loại function**

Function có các loại sau
* Function có tham số, hoặc không có tham số
* Function có giá trị trả về hoặc không

#### **1. Function không có tham số**

```js
function sayHello() {
    console.log("xin chào")
}

sayHello();
```
#### **2. Function  có tham số**

Với function kiểu này có thể có một hoặc nhiều tham số (không nên quá 3 tham số)

```js
//function 1 tham số
function sayHelloWithName(name) {
    console.log(`Xin chào: ${name}`);
}

sayHelloWithName("Vũ Việt Cường")

//function 2 tham số
function showInfo(name, year) {
    console.log(`Xin chào tôi tên là ${name}, năm nay tôi ${2022-year} tuổi.`)
}

showInfo("Cường",1998)
```

#### **3. Function trả về kết quả**

Để trả về kết quả, sử dụng từ khóa **return**

```js
/ function có trả về kết quả
// VD:Tính tổng 2 số

function sum(a,b) {
    let result = a + b
    console.log(a);
    console.log(b);

    return result
    // những câu lệnh sau từ khoá return không được thực thi
    console.log(a);
    console.log(b);
}
```

#### **#### **4. Function không trả về kết quả****

Đối với function không có từ khóa **return** thì coi như function đó không trả về kết quả

## **3.Default Parameter ES6**

Cho phép khởi tạo function với những default value nếu như chúng được định nghĩa sai.

Khi sử dụng chức năng này sẽ giúp function dễ control và ít error hơn.

Ví dụ:

```js
//Default Parameter ES6
function sum1(a=10,b=20) {
    let result = a + b
    return result
}

console.log(sum1(3)) // 23
console.log(sum1()) // 30
console.log(sum1(5,6)) // 11
```

## **4.Phạm vi của biến (scope)**

**Scope** có thể hiểu nôm na là “phạm vi sử dụng của biến”

Có 3 loại scope:
* Global scope
* Function scope
* Block scope

### **Global scope**

Một biến được coi là global scope (toàn cục) nếu biến đó được định nghĩa bên ngoài function

```js
let name = "Cường";
let age = 24;

console.log(name);
console.log(age);
```

### **Function scope**

Một biến được coi là function scope nếu biến đó được định nghĩa bên trong function

```js
function hello() {
    let name = "Cường";
    console.log(name);
}

hello(); // Cường
console.log(name) // Lỗi
```

### **Block scope**

Một biến được coi là block scope nếu biến đó được định nghĩa bên trong cặp dấu {}

```js
{
    let name = "Cường";
    console.log(name); // Cường
}

console.log(name) // Lỗi
```
### **Chú ý**

Nếu 1 biến không có từ khóa khai báo biến, sẽ trở thành biền **global**

```js
function sayHello() {
    number = 10;
    console.log(number);
}

sayHello() // 10

console.log(number); // 10
```

## **5.Kiểu dữ liệu Boolean**

### **Kiểu dữ liệu Boolean**

Giá trị của kiểu dữ liệu này chỉ có thể là **true** hoặc **false**

Ví dụ

```js
let a = true;
let b = false;
let c = !a;
let d = !b;
```

### **Xác định giá trị Boolean**

Để xác định giá trị boolean cho biến, biểu thức,… ta sử dụng hàm **Boolean()**

Ví dụ

```js
let a = 5;
console.log(Boolean(a));

let b = 6;
let c = 10;
console.log(Boolean(b < c));
```

## **6.Truthy & Falsy value**

**Truthy value** là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là **true**.

Ngược lại, **Falsy value** là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là **false**

Note:
* Có **6 giá trị** sau được coi là **falsy : false, 0, NaN, ‘’, null, undefined**
* Các giá trị còn lại, ngoài các giá trị trên được gọi là **truthy**

```js
console.log(Boolean(false)); // false

console.log(Boolean(0)); // false

console.log(Boolean(NaN)); // false

console.log(Boolean("")); // false

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false
```

## **7.Câu lệnh điều kiện if - else if - else**

### **Câu lệnh if**

Thực hiện câu lệnh trong if nếu điều kiện cho trước là đúng.

```js
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
}

//Vd1

let hour = 6;
if(hour<10){
    console.log("Good morning!")
}

//Vd2

let troiDep = true;
let coTien = true;

if(troiDep && coTien){
    console.log("Đi chơi")
}
```

### **Câu lệnh if - else**

Nếu **điều kiện đúng** thực hiện câu lệnh trong **if**, ngược lại nếu **điều kiện sai** thì hiện câu lệnh trong **else**.

```js
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
} else {
    // Code được thực thi nếu điều kiện sai
}

//Vd : Nếu trời đẹp thì đi chơi ngược lại thì ở nhà

if(troiDep == true) {
    console.log("Đi chơi")
} else {
    console.log("Ở nhà")
}

// Vd2 : Nếu có 30tr trở lên thì mua iphone 13 promax ngược lại thì mua sámung s21

let money = 10;
if(money >= 30) {
    console.log("Mua iphone 13 promax")
} else {
    console.log("Mua samsung s21")
}
```

### **Câu lệnh if - else if - else**

Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai

```js

// if - else if - else
// Vd :Nếu có 30tr trở lên thì mua iphone 13 promax
//     Nếu có 20->30 triệu mua samsung s1
//     Nếu có 15->20 triệu mua oppo
//     Nếu có 15 triệu trở xuống mua xiaomi

if(money >= 30){
    console.log("Mua iphone")
} else if(money >=20 && money < 30){
    console.log("Mua samsung")

} else if(money >=15 && money < 20){
    console.log("Mua oppo")
    
} else{
    console.log("Mua xiaomi")
}
```

## **8.Sự khác biệt giữa == và ===**

**==** và **===** đều được sử dụng để so sánh

Tuy nhiên cần chú ý điểm sau khi sử dụng để thực hiện so sánh
* Toán tử **==** so sánh trừu tượng (abstract equality), tức là nó thực hiện các chuyển đổi loại cần thiết trước khi so sánh (so sánh về mặt giá trị)
* Còn toán tử **===** so sánh nghiêm ngặt (strict equality), nghĩa là nó sẽ không thực hiện chuyển đổi loại. Do đó nếu hai giá trị không cùng loại, thì khi so sánh, kết quả sẽ trả về false (so sánh về mặt giá trị và kiểu dữ liệu)

Ví dụ

```js
let a = 2;
let b = "2";

// Sử dụng toán tử ==
console.log(a == b) // true
// Đúng vì b khi thực hiện so sánh sẽ được convert sang dang số (2) 2 == 2 --> true

// Sử dụng toán tử ===
console.log(a === b) // false
// Sai vì kiểu dữ liệu của a là number và của b là string
```

## **9.Toán tử 3 ngôi**

Ví dụ

```js
//Toán tử 3 ngôi
// let hour = 6;
if(hour < 12) {
    console.log("Good morning")
} else  {
    console.log("Good afternoon")
}

// cách viết
hour < 12 
 ?  console.log("Good morning")
 :  console.log("Good afternoon")
 ```







