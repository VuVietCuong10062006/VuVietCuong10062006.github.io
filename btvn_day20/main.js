
// chức năng
// 1.Thêm công việc
// 2.Sửa công việc
// 3.Xoá công việc
// 4.Lọc công việc

//đối tượng là gì?Thuộc tính của đối tượng
// id,title,status

let todos
 
// [
//     {
//         id:1,
//         title:'đi chơi',
//         status:true
//     },
//     {
//         id:2,
//         title:'đi làm',
//         status:false
//     },
//     {
//         id:3,
//         title:'đi học',
//         status:true
//     }
// ]

let randomId = () =>{
    return Math.floor(Math.random()*97 +4)
}

let todoListEle = document.querySelector('.todo-list')
let renderTodo = (arr = []) =>{
    todoListEle.innerHTML = ''

    // Kiểm tra danh sách công việc có trống hay không
    if(arr.length == 0){
        todoListEle.innerHTML = `<p class="todos-empty">Không có công việc trong danh sách</p>`
        return
    }
    // Hiển thị danh sách
    let html =''
    arr.forEach((t) =>{
        html +=`<div class="todo-item ${t.status == true ? 'active-todo' : ''}" >
        <div class="todo-item-title">
            <input type="checkbox" ${t.status == true ? 'checked' : ''} onclick='tonggleStatus(${t.id})'/>
            <p>${t.title}</p>
        </div>
        <div class="option">
            <button class="btn btn-update" onclick='updateTodo(${t.id})'>
                <img src="./img/pencil.svg" alt="icon" />
            </button>
            <button class="btn btn-delete" onclick='deleteTodo(${t.id})'>
                <img src="./img/remove.svg" alt="icon" />
            </button>
        </div>
    </div>`
    })

    todoListEle.innerHTML = html
}

renderTodo(todos)

// xoá công việc
let deleteTodo = (id) =>{
    todos = todos.filter((todo) =>{
        return todo.id != id
    })
    renderTodo(todos)
    setDataToLocalStorage(todos)
}


// đổi trạng thái

 let tonggleStatus = id => {
    let todo = todos.find(todo => todo.id == id)
    todo.status = !todo.status
    renderTodo(todos)
    setDataToLocalStorage(todos)
 }

 // lọc công việc theo trạng thái
let todoOptionItem = document.querySelectorAll('.todo-option-item input') 
Array.from(todoOptionItem).forEach(input =>{
    input.addEventListener('change',() =>{
        let option = input.value
        let todoFileter = []
        switch(option){
            case 'all':{
                todoFileter = [...todos]
                break
            }
            case 'active':{
                todoFileter =todos.filter(todo =>todo.status ==true)
                break
            }
            case 'unactive':{
                todoFileter =todos.filter(todo =>todo.status ==false)
                break
            }
            default :{
                todoFileter = [...todos]
                break
            }
        }

        renderTodo(todoFileter)
    })
})

// thêm 
let todoInput =document.getElementById('todo-input')
let btnAdd =document.getElementById('btn-add')

let addTodo = () =>{
    let title = todoInput.value
    if(title == ''){
        alert('Tiêu đề công việc không được để trống')
        return
    }

    let newTodo = {
        id : randomId(),
        title : title,
        status :false
    }

    todos.push(newTodo)
    renderTodo(todos)
    todoInput.value = ''
}
btnAdd.addEventListener('click',(e) =>{
    addTodo()
    setDataToLocalStorage(todos)
    // let title = todoInput.value
    // if(title == ''){
    //     alert('Tiêu đề công việc không được để trống')
    //     return
    // }

    // let newTodo = {
    //     id : randomId(),
    //     title : title,
    //     status :false
    // }

    // todos.push(newTodo)
    // renderTodo(todos)
    // todoInput.value = ''
})


todoInput.addEventListener('keydown',(e) =>{
    if(e.keyCode ==13){
        addTodo()
        setDataToLocalStorage(todos)
    }
})


// update 
let idUpdate = null
let updateTodo = (id) =>{
    let tittle
    let todo = todos.find(todo => todo.id == id)
    tittle = todo.title
    todoInput.value = tittle
    todoInput.focus()
    idUpdate = id
    console.log(btnAdd)
    btnAdd.style.display = 'none'
    btnUpdate.style.display = 'inline-block'
}

let btnUpdate =document.querySelector('#btn-update')
btnUpdate.addEventListener('click',(e) =>{
    let newTittle = todoInput.value
    let todo = todos.find(todo => todo.id == idUpdate)
    todo.title = newTittle
    renderTodo(todos)
    setDataToLocalStorage(todos)
    todoInput.value = '' 
    btnAdd.style.display = 'inline-block'
    btnUpdate.style.display = 'none'
})


// lấy dữ liệu từ localStorage
let getDataFromLocalStorage = () =>{
    let data =localStorage.getItem('todos')
    if(data){
        todos = JSON.parse(data)
    } else{
        todos = []
    }
    renderTodo(todos)
}
getDataFromLocalStorage()

// Lưu dữ liệu vào localStorage
let setDataToLocalStorage = (arr) =>{
    localStorage.setItem('todos',JSON.stringify(arr))
}