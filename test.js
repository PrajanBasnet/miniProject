let total = 0;
let x = 1;
let temp = 0;
let newAr = [];
function fibo(n){

 if (n  === 0) return 1;
 newAr.push(temp)
    temp = total + x 
    x = total
    total = temp;
    fibo(n-1)
    return newAr
}

console.log(fibo(8)); 