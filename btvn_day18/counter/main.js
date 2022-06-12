
let btnCong = document.querySelector('.nextBtn')
let btnTru =document.querySelector('.prevBtn')
let counter = document.querySelector('#counter')
let numberCountetr = 0

btnCong.addEventListener('click',(e) =>{
    numberCountetr = numberCountetr + 1
    counter.innerText =`${numberCountetr}`
    if(numberCountetr > 0){
        counter.style.color = 'green'
    } else if(numberCountetr == 0){
        counter.style.color = '#333333'
    } else{
        counter.style.color = 'red'
    }
})

btnTru.addEventListener('click',(e) =>{
    numberCountetr = numberCountetr -1
    counter.innerText =`${numberCountetr}`
    if(numberCountetr > 0){
        counter.style.color = 'green'
    } else if(numberCountetr == 0){
        counter.style.color = '#333333'
    } else{
        counter.style.color = 'red'
    }
})

