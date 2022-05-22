
// bài 1

function repeatString1(a){
    let sum = ""
    for(let i=0 ; i<10;i++){
        sum=sum+a
    }
    console.log(sum)
}

repeatString1("a")

//bài 2

function repeatString2(a){
    let sum = ""
    for(let i=0 ; i<9;i++){
        sum=sum+a+"-"
    }
    sum=sum+a
    console.log(sum)
}

repeatString2("a")

// bài 3

function repeatString3(s,n){
    let sum = ""
    for( let i=0; i<n-1; i++){
        sum = sum + s + "-"
    }
    sum = sum + s  
    console.log(sum)
}

repeatString3("a",5)

// bài 4

function sum(){
     let sum = 0
    for (let i = 0; i <= 100; i++) {
        if(i%5 == 0){
            sum = sum + i
        }
    }
    console.log(sum)
}

sum()

// bài 5

function volume(r){
    let v = (4*Math.PI*r*r*r)/3
    return v
}

console.log(volume(4))

// bài 6

function sumInteger(a,b){
    let sum=0
    if(a<b){
        for (let i=a+1; i < b; i++) {
            sum=sum+i
        }
        console.log(sum)
    } else if(a==b) {
        console.log(sum)
    } else{
        for (let i = a-1; i >b; i--) {
            sum = sum+i
        }
        console.log(sum)
    }

    
}

sumInteger(5,1)

// bài 7

function isPrime(a){
    if(a<2){
        return false
    } else if(a==2){
        return true
    } else {
        for(i=2;i<a;i++){
            if(a%i == 0){
                return false
            } 
        }
    }
    return true
}

console.log(isPrime(6))

// bài 8

function sumPrime(b){
    let sum=0
    for( let i=0; i<=b; i++){
        if(isPrime(i)==true){
            sum=sum+i
        }
    }
    return sum
}

// sumPrime(6)
console.log(sumPrime(15))

// bai9

function sumWish(a){
    let sum = 0
    for (let i = 1; i <= a; i++) {
        if(a%i == 0){
            sum=sum+i
        }
    }
    console.log(sum)
}

sumWish(10)


