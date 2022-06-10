
// bài 1 
let p = document.getElementById('text')
p.style.color = '#777'
p.style.fontSize = '2rem'
p.innerText = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.'

// bài 2
let li1 = document.querySelectorAll('.bai2 li')

for (let i = 0; i < li1.length; i++) {
    li1[i].style.color = 'blue'
}

// bài 3 :
// 3.1 :
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