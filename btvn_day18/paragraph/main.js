
// 1:
let para = document.querySelector('p')
let content = para.innerText.split(' ').map((e) =>{
    if(e.length >= 8){
        return `<span style="background-color: yellow;">${e}</span>`
    } else{
        return e
    }
}).join(' ')

para.innerHTML = content

// 2 :
para.insertAdjacentHTML('afterend',`<a href="https://www.facebook.com/" target="_blank">facebook</a>`)

// 3 :

let wordCount = para.innerText.split(' ').length

let wordCountEle = document.createElement('div')
wordCountEle.innerText = `${wordCount} word`
para.insertAdjacentElement('beforebegin',wordCountEle)

// 4 :

para.innerHTML = para.innerHTML.replace(/\?/g,'🤔')
para.innerHTML = para.innerHTML.replace(/\!/g,'😲')

// para.innerHTML = para.innerText.split('').map((e) =>{
//     if(e == '?'){
//         return `🤔`
//     } else if(e == '!'){
//         return '😲'
//     } else {
//         return e
//     }
// }).join('')