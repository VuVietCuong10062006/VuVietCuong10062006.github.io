
const grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
]

// 1

function trungBinh( grades = [] ){
   let sum = grades.reduce((t,e) =>{
        return t + e.grade
    },0)
    return sum/(grades.length)
}

console.log(trungBinh(grades))

// 2

function trungBinhNam( grades = [] ){
    let nam = grades.filter((e) => {
        return e.sex === 'M'
    })

    return trungBinh(nam)
}

console.log(trungBinhNam(grades))

// 3

function trungBinhNu( grades = [] ){
    let nu = grades.filter((e) => {
        return e.sex === 'F'
    })

    return trungBinh(nu)
}

console.log(trungBinhNu(grades))

// 4

function maxM( grades = []){
    let nam = grades.filter((e) => {
        return e.sex === 'M'
    })

    nam.sort((a,b) =>{
        return b.grade -a.grade
    })
    return nam[0]
}

console.log(maxM(grades))

// 5

function maxF( grades = []){
    let nu = grades.filter((e) => {
        return e.sex === 'F'
    })

    nu.sort((a,b) =>{
        return b.grade -a.grade
    })
    return nu[0]
    
}

console.log(maxF(grades))

// bài 6

function minM( grades = []){
    let nam = grades.filter((e) => {
        return e.sex === 'M'
    })

    nam.sort((a,b) =>{
        return a.grade -b.grade
    })
    return nam[0]
}

console.log(minM(grades))

// bài 7

function minF( grades = []){
    let nu = grades.filter((e) => {
        return e.sex === 'F'
    })

    nu.sort((a,b) =>{
        return a.grade -b.grade
    })
    return nu[0]
}

console.log(minF(grades))

// bai8

function maxGrades( grades =[]){
    let a = grades.sort((a,b) => {
        return b.grade-a.grade
    })

    return a[0]
}

console.log(maxGrades(grades))

// bài 9 

function minGrades( grades =[]){
    let a = grades.sort((a,b) => {
        return a.grade-b.grade
    })

    return a[0]
}

console.log(minGrades(grades))

// bài 10

 function gradeF(grades =[]){
    return grades.filter((e) =>{
        return e.sex ==='F'
    })
 }

 console.log(gradeF(grades))

// bài 11

function sortName(grades = []){
    let a = grades.map((e) => {
        return e.name
    })
    return a.sort()
}

console.log(sortName(grades))

// bài 12

function sortGrade(grades = []){
    return grades.sort((a,b) => {
        return b.grade - a.grade
    })
}

console.log(sortGrade(grades))

// bài 13

function nameGradesF(grades = []){
    return gradeF(grades).filter((e) =>{
       return e.name[0] ==='J'
    })
}

console.log(nameGradesF(grades))

// bai 14 

function top5(grades=[]){
    return sortGrade(grades).filter((e,i) => {
        return i < 5
    })
}
console.log(top5(grades))
