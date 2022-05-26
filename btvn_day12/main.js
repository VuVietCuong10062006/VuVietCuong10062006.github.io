
// bài 1 :

function checkStringExist(str='',check=''){
    if(str.indexOf(check)==-1){
        return false
    } 
    return true
}

console.log(checkStringExist('i love you','hate'))

// bai2 :

function shortenString (str=''){
    if(str.length>8){
        let cut = str.slice(0,8)
        return cut+='...'
    } else{
        return str
    }
    
}

console.log(shortenString('Xin chào các bạn'))

// bai3 :

function reverseSring(name=""){
    let newStr = ""
    for( let i = name.length-1; i>=0;i--){
        newStr = newStr + name[i]
    }
    return newStr
}

function isReverseSring(str=''){
    str = str.toLowerCase()
    let str2
    str2 = str.split(' ').join('')
    let str3
    str3=reverseSring(str2)
    if(str2 == str3){
        return true
    }
    return false
}

console.log(isReverseSring('Race car'))

// bài 4 :

function sort(int = 1){
    let str
    str = int.toString()
    str=str.split('').sort()
    if(str[0] == '0' ){
        for (let i = 0; i < str.length-1 ; i++) {
            if(str[i] != '0'){
                let temp = str[0]
                str[0]=str[i]
                str[i]=temp
                console.log(str[0])
                return str.join('')*1
            }
        }
    }
    return str*1
}

console.log(sort(203950))

// bài 5 :

function  reverseSnakecase ( str=''){
    str = str.toLowerCase()
    str = str.split(' ').join('_')
    return str
}

console.log(reverseSnakecase('Xin Chào Các BẠN'))






