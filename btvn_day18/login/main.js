
const users = [
    {
        username: "bob",
        password: "123"
    },
    {
        username: "alice",
        password: "456"
    },
]

let usernames = users.map((e)=>{
    return e.username
})
let passwords = users.map((e)=>{
    return e.password
})

let arr = users.map((e)=>{
    return e.username
})
console.log(arr)
let btnLogin = document.getElementById('btn-login')
let inputUsername = document.getElementById('username')
let inputPassword = document.getElementById('password')
btnLogin.addEventListener('click',(e) =>{
    if(inputUsername.value == '' || inputPassword.value == ''){
        alert('điền thiếu thông tin')
    } else{
        let usernames = users.map((e) => e.username)
        let passwords = users.map((e) => e.password)
        if(usernames.indexOf(inputUsername.value) != -1 && passwords.indexOf(inputPassword.value) != -1){
            alert('Đăng nhập thành công')
        } else{
            alert('Tài khoản hoặc mật khẩu không chính xác')
        }
    }
})