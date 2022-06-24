
const btn = document.getElementById('btn')
const image = document.getElementById('image')
const select = document.getElementById('breed-list')
const ulEle = document.querySelector('.sub-breed-list')

let getBreedList = async () =>{
    try{
        let res = await axios.get("https://dog.ceo/api/breeds/list/all")
        renderBreed(res.data.message)
        btn.addEventListener('click',(e) =>{
            let a = select.value
            if(res.data.message[a].length == 0){
                ulEle.innerHTML = ''
                ulEle.insertAdjacentHTML('beforeend',`
                <li>Không có sub breed </li>
            `)
            } else{
                getSubBreed()
            }
        })
    } catch(error){
        console.log(error)
    }
}

// render breed
let renderBreed = (breeds) =>{
    let keys = Object.keys(breeds)
    keys.forEach((key,i) =>{
        select.insertAdjacentHTML('beforeend',`<option value="${key}">${key}</option>`)
    })
}

getBreedList()

// lấy sub breed rồi render
let getSubBreed = async () =>{
    try{
        let res = await axios.get("https://dog.ceo/api/breed/hound/list")  
        let a = res.data.message
        a.forEach((e) =>{
            ulEle.insertAdjacentHTML('beforeend',`
            <li onclick ='randomImage()'>${e}</li>
        `)
        })      
    } catch(error){
        console.log(error)
    }
}

// render random ảnh
let randomImage = async () =>{
    try{
        let res = await axios.get('https://dog.ceo/api/breeds/image/random')
        image.src = res.data.message
    } catch(error){
        console.log(error)
    }
}