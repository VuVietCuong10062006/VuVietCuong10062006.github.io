
let items = [
    {
        text: 'Item 8' 
    },
    {
        text: 'Item 9'
    },
    {
        text: 'Item 10'
    }
]

let list = document.querySelector('#list')
items.forEach((e) =>{
    list.insertAdjacentHTML('beforeend',`<li>${e.text}</li>`)
})

// 3.2 :
let li1Red = list.querySelector('li:first-child')
li1Red.style.color = 'red'

// 3.3 :
let li3 = list.querySelector('li:nth-child(3)')
li3.style.backgroundColor = 'blue'

// 3.4 :
let li4 = list.querySelector('li:nth-child(4)')
li4.parentNode.removeChild(li4)

// 3.5 :
let newLi4 = document.createElement('li')
newLi4.innerText = 'Nội dung bất kì'
let li5 = list.querySelector('li:nth-child(4)')
li5.insertAdjacentElement('beforebegin',newLi4)

// tiếp ul-ui
// 1 :

let btnAdd = document.createElement('button')
btnAdd.innerText='Add'
let inputText = document.createElement('input')
inputText.type = 'text'
inputText.placeholder = 'text'
list.insertAdjacentElement('afterend',btnAdd)
btnAdd.insertAdjacentElement('afterend',inputText)
btnAdd.addEventListener('click',(e) =>{
    if(inputText.value == ''){
        alert('chưa nhập nội dung')
    } else{
        list.insertAdjacentHTML('beforeend',`<li>${inputText.value}</li>`)
    }
    
})

// 2 :

let btnRemove = document.createElement('button')
btnRemove.innerText='Remove'
btnAdd.insertAdjacentElement('afterend',btnRemove)
btnRemove.addEventListener('click',(e) =>{
    let li = document.querySelectorAll('li')
    list.removeChild(li[li.length-1])
})

// 3 :

let btnHide = document.createElement('button')
btnHide.innerText = 'Hide'
list.insertAdjacentElement('beforebegin',btnHide)
btnHide.addEventListener('click',(e) =>{
    if(btnHide.innerText == 'Hide'){
        btnHide.innerText = 'Show'
        list.style.display = 'none'
    } else if(btnHide.innerText == 'Show'){
        btnHide.innerText = 'Hide'
        list.style.display = 'block'
    }
})

