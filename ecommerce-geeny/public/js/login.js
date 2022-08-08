

const usernameEle = document.getElementById('username');
const emailEle = document.getElementById('email');
const phoneEle = document.getElementById('phone');
const passworkEle = document.getElementById('passwork')

const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();
    let usernameValue = usernameEle.value
    let passworkValue = passworkEle.value
    let emailValue = emailEle.value
    if (isValid) {
        alert('Đăng nhập thành công');
        let login = [
            {
                name : usernameValue,
                passwork : passworkValue,
                email : emailValue
            }
        ]
    
        localStorage.setItem("login",JSON.stringify(login))
    }
});

const getDataRegisterFromLocalStorage = () => {
    const localStorageValue = localStorage.getItem("register");
    if(localStorageValue) {
        return JSON.parse(localStorageValue)
    } else {
        return [{
            name : 123456789,
            passwork : 123456789,
            email : 123456789
        }];
    }
}
function checkValidate() {
    let usernameValueRegister = getDataRegisterFromLocalStorage()[0].name
    let emailValueRegister = getDataRegisterFromLocalStorage()[0].email
    let passworkValueRegister = getDataRegisterFromLocalStorage()[0].passwork
    let usernameValue = usernameEle.value;
    let emailValue = emailEle.value;
    let passworkValue = passworkEle.value;
    // let phoneValue = phoneEle.value;
    let isCheck = true;
    if (usernameValue == '') {
        setError(usernameEle, 'Tên không được để trống');
        isCheck = false;
    } else {
        if(usernameValue !== usernameValueRegister){
            setError(usernameEle, 'Tên đăng nhập không chính xác')
            isCheck = false
        } else{
            setSuccess(usernameEle)
        }
    }

    if (emailValue == '') {
        setError(emailEle, 'Email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        if(emailValue !== emailValueRegister){
            setError(emailEle, 'Email không chính xác')
            isCheck = false
        } else{
            setSuccess(emailEle)
        }
    }

    if(passworkValue == ''){
        setError(passworkEle, 'Mật khẩu không được để trống')
        isCheck = false
    }  else{
        if(passworkValue !== passworkValueRegister){
            setError(passworkEle, 'Mật khẩu không chính xác')
            isCheck = false
        } else{
            setSuccess(passworkEle)
        }
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