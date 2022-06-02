//bai về nhà 1

function sortStudents(arr=[]){
    arr.sort().reverse()
    return arr
}

console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']))

// bài về nhà 2

function shuffle(arr=[]){
    let random = Math.floor(Math.random()*(arr.length))
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        arr[i] = arr[random]
        arr[random]=temp
    }
    return arr
}

console.log(shuffle([1,2,3,4,5]))


// bài về nhà 3

function symmetricDifference(arr1=[],arr2=[]){
    let newArr1 =[]
    let newArr2 = []
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            newArr1.push(arr2[i])
        }
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            newArr2.push(arr1[i])
        }
    }
    return newArr1.concat(newArr2)
}

console.log(symmetricDifference([1, 2, 3,], [1, 2, 4, ]))

// bài về nhà 4

function union(arr1=[],arr2=[]){
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        if(newArr.indexOf(arr1[i]) == -1){
            newArr.push(arr1[i])
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if(newArr.indexOf(arr2[i]) == -1){
            newArr.push(arr2[i])
        }
    }
    return newArr
}

console .log(union([1, 2, 3, 1], [4, 3, 2, 4]))
