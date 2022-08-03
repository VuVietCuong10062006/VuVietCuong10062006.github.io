
const usernameEle = document.getElementById('username');
const emailEle = document.getElementById('email');
const phoneEle = document.getElementById('phone');
const passworkEle = document.getElementById('passwork')
const cfPassworkEle = document.getElementById('cf-passwork')

const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();
    let usernameValue = usernameEle.value;
    let passworkValue = passworkEle.value;
    let emailValue = emailEle.value;
    let cfPassWorkValue = cfPassworkEle.value
    if (isValid) {
        alert('Gửi đăng ký thành công');
        let register = [
            {
                name : usernameValue,
                passwork : passworkValue,
                email : emailValue,
                cfpasswork : cfPassWorkValue
            }
        ]
    
        localStorage.setItem("register",JSON.stringify(register))
    }
});

function checkValidate() {
    let usernameValue = usernameEle.value;
    let emailValue = emailEle.value;
    let passworkValue = passworkEle.value;
    let cfPassworkValue = cfPassworkEle.value
    // let phoneValue = phoneEle.value;
    let isCheck = true;
    if (usernameValue == '') {
        setError(usernameEle, 'Tên không được để trống');
        isCheck = false;
    }else if(usernameValue.length < 5 || usernameValue.length > 20){
        setError(usernameEle, 'Tên phải lớn hơn 5 và nhỏ hơn 20 kí tự')
        isCheck = false
    } else {
        setSuccess(usernameEle);
    }

    if (emailValue == '') {
        setError(emailEle, 'Email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    if(passworkValue == ''){
        setError(passworkEle, 'Mật khẩu không được để trống')
        isCheck = false
    } else if(passworkValue.length < 5 || passworkValue.length > 20){
        setError(passworkEle, 'Mật khẩu lớn hơn 5 và nhỏ hơn 20 kí tự')
        isCheck = false
    } else{
        setSuccess(passworkEle)
    }

    if(cfPassworkValue == ''){
        setError(cfPassworkEle, "Mật khẩu nhập lại không được để trống")
        isCheck = false
    } else if(passworkValue !== cfPassworkValue){
        setError(cfPassworkEle, "Mật khẩu nhập lại không chính xác")
        isCheck = false
    } else{
        setSuccess(cfPassworkEle)
    }
    
    // if (phoneValue == '') {
    //     setError(phoneEle, 'Số điện thoại không được để trống');
    //     isCheck = false;
    // } else if (!isPhone(phoneValue)) {
    //     setError(phoneEle, 'Số điện thoại không đúng định dạng');
    //     isCheck = false;
    // } else {
    //     setSuccess(phoneEle);
    // }

    return isCheck;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

// function isPhone(number) {
//     return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
// }