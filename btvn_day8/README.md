# **Buổi9 :JavaScrip căn bản**

## **1.Giới thiệu về JavaScrip**

### **1.1.Javascript là gì?**

* Javascript (JS) là một ngôn ngữ kịch bản phía client
* Javascript được sử dụng rộng rãi trong việc kết hợp với HTML/CSS để thiết kế web
động.
### **1.2.Javascript dùng để làm gì?**

* Sửa đổi nội dung của một trang web.
* Thay đổi style và vị trí của các thành phần trên trang web.
* Phản hồi với các sự kiện từ người dùng.
* Thực hiện và kiểm soát việc chuyển tiếp các hình ảnh động.
* Thông báo cho người dùng.
* Thao tác với dữ liệu đầu vào và hiển thị kết quả sau khi xử lý.
* Xác thực dữ liệu đầu vào của người dùng trước khi gửi nó đến máy chủ.
* ...
## **2.Viết chương trình JavaScrip đầu tiên**

### **2.1.Cách 1: Viết trực tiếp mã Javascript trong file HTML**

* Viết mã Javascript in ra dòng chữ “Hello world” trên màn hình console của trình
duyệt.

```js
  //Viết mã Javascript trong cặp thẻ script 
    <script>
        console.log("Hello world");
    </script>
```
Lưu ý : Mã javascript nên đặt ở phần cuối cùng của body

### **2.2.Cách 2 : Tạo file có đuôi là .js để viết mã Javascript (nên sử dụng)**

* Tạo file main.js để viết mã Javascript (main.js nằm cùng cấp với index.html)
* Nhúng file main.js vào file index.html thông qua thuộc tính src trong thẻ script

``` js

<body>
    <script src="./main.js"></script>
</body>
```

* Viết mã Javascript vào file main.js in ra dòng chữ “Hello world” trên màn hình console của trình duyệt

```js
console.log("Hello world");
```

## **3.Biến trong JavaScrip**

### 3.1.Biến là gì?

Biến là một định danh dùng để lưu trữ dữ liệu, thông qua biến chúng ta có thể thực hiện các thao tác với dữ liệu.

Mỗi biến có một kiểu dữ liệu riêng, dựa vào kiểu dữ liệu của biến có các thao tác khác nhau với biến.

Ví dụ:

* Biến kiểu số thì có phép cộng, trừ, nhân, chia.
* Biến kiểu chuỗi thì có độ dài của chuỗi, phép nối 2 chuỗi, …

### **3.2.Khai báo biến**

Để khai báo biến sử dụng từ khóa : let / const

Sử dụng 2 cách sau để khai báo biến:

* Khai báo biến và không gán giá trị cho biến: let age;
* Khai báo biến và gán giá trị cho biến: let age = 35;

```js
// khai  báo biến
let name;
console.log(name)

name = "Việt Cường"
console.log(name)

// vừa khai báo biến vừa tạo giá trị cho biến

let email = "cuong@gmail.com"
let number = 10
let isStatus = true

// kiểu giữu liệu nguyên thuỷ(primary type)
// undefined,string,number,boolean,...

// khai báo hằng số
const PI=3.14
console.log(PI)
```

### **3.3.Quy tắc đặt tên biến**

* Chứa các ký tự chữ, số, _ và $
* Ký tự đầu tiên không được là số (nên là chữ)
* Có phân biệt hoa thường
* Không trùng với các từ khóa của Javascript như: for, while, this, …
* Nên đặt tên theo kiểu camelCase nếu tên biến có độ dài 2 từ trở lên cho dễ đọc. Ví
dụ binhphuong thì nên đặt là binhPhuong.

### **3.4.Kiểm tra kiểu dữ liệu của biến**

```js
// kiểm tra kiểu dữ liệu của 1 biến

console.log(typeof email)
console.log(typeof number)
console.log(typeof isStatus)
```

## **4.Kiểu dữ liệu String**

### **4.1.Kiểu dữ liệu String**

String (chuỗi) là một đoạn text có thể có một hoặc nhiều ký tự.

Các chuỗi đều phải được bao quanh bằng cặp dấu nháy đơn ’ hoặc nháy kép ".

Ví dụ

```js
// chuỗi
let message = "Xin chào các bạn, mình tên là Vũ Việt Cường. Mình sinh năm 1998";
console.log(message)
```

### **4.2.Một số lưu ý**
Lưu ý trường hợp trong chuỗi cũng có xuất hiện dấu nháy đơn hoặc nháy kép thì phải thêm ký tự \ đằng trước dấu nháy đó.

```js
// chuỗi
let message = "Xin chào các bạn, mình tên là \"Vũ Việt Cường\". Mình sinh năm 1998";
console.log(message)
```
Khi bạn muốn Enter xuống hàng một chuỗi thì bắt buộc phải sử dụng dấu + để nối chuỗi.

```js
let message = "Xin chào các bạn, " +
"mình tên là \"Vũ Việt Cường\". " +
"Mình sinh năm 1998";
```

### **4.3.Nối chuỗi trong Javascript**

```js
/ cộng chuỗi
let firstName = "Vũ";
let lastName = "Việt Cường";
let fullName = firstName + " " + lastName;
console.log(fullName)
```

## **5.Template strings – ES6**
Khai báo chuỗi sử dụng ký tự back-tick `` thay cho ký tự nháy đơn hoặc nháy kép.

Khi khai báo chuỗi kiểu này có thể viết chuỗi trong nhiều dòng và có thể dùng dấu nháy đơn hoặc nháy kép thoải mái mà không cần dùng escape character.

Có thể dùng các biến, biểu thức ngay trong chuỗi với cú pháp như sau:

```js
// Template string 
let address ="Hoà Bình"
let age = 24
console.log(`Xin chào các bạn, mình tên là ${fullName}. Mình sinh năm ${2022-age}`)


console.log(`
    dòng 1
    dòng 2
    dòng 3
`)
```

## **5.Kiểu dữ liệu Number**
Number (số) là một tập hợp của các con số (0 – 9) không chứa dấu khoảng trắng và có thể chứa dấu trừ (-) nằm ở đầu để đại diện cho số âm.

```js
let age = 25;
let num = 5.1;
```
## **6.Math object trong Javascript**

Đối tượng **Math** trong Javascript sẽ giúp bạn thực hiện các biểu thức đặc biệt trong toán học.

Một số phương thức hay được sử dụng

* **Math.PI** : Lấy ra giá trị của số PI
* **Math.round(number)** : Làm tròn số bình thường
* **Math.ceil(number)** : Làm tròn số lên
* **Math.floor(number)** : Làm tròn số xuống
* **Math.random()** : Random 1 số ngẫu nhiên trong khoảng 0 -> 1
* **Math.min(number1, number 2, … number n)** : Lấy ra giá trị nhỏ nhất trong danh sách số
* **Math.max(number1, number 2, … number n)** : Lấy ra giá trị lớn nhất trong danh sách số
* **Math.pow(a, b)** : Số mũ (a^b)
* **Math.sqrt(number)** : Căn bậc 2
* ...

* **Ví dụ**

```js
// Một số ví dụ về Math Object

// 1. Math.PI
console.log(Math.PI); // 3.141592653589793

// 2. Math.ceil : Làm tròn lên
console.log(Math.ceil(1.2)); // 2
console.log(Math.ceil(1.7)); // 2

// 3. Math.floor : Làm tròn xuống
console.log(Math.floor(2.1)); // 2
console.log(Math.floor(2.6)); // 2

// 4. Math.round : Làm tròn bình thường
console.log(Math.round(2.1)); // 2
console.log(Math.round(2.6)); // 3

// 5. Math.min(number1, number 2, … number n) : Lấy ra giá trị nhỏ nhất trong danh sách số
console.log(Math.min(2, 4, 1, 6, 7)); // 1

// 6. Math.max(number1, number 2, … number n) : Lấy ra giá trị lớn nhất trong danh sách số
console.log(Math.max(2, 4, 1, 6, 7)); // 7

// 7. Math.pow(a, b) : Số mũ (a^b)
console.log(Math.pow(2, 3)); // 8

// 8. Math.sqrt(number) : Căn bậc 2
console.log(Math.sqrt(9)); // 3

// lấy ngẫu nhiên số nguyên từ 0 đến 100
console.log(Math.floor(Math.random()*100 +1))

// ...
```

Ngoài ra còn rất nhiều phương thức khác của đối tượng Math. Các bạn có thể tham khảo tại đây :

https://www.w3schools.com/js/js_math.asp
