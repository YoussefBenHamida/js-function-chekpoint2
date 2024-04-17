// factorial
x = 4  
function arr_nmbr_factorial(nmbr){
    number_below_x = []
    for (let i=1; i<=nmbr ;i++){
        number_below_x.push(i)
    }
}
function factorial(array){
    result = 1
    for (elm of array){
        result *= elm 
    }
   console.log("The factorial give us", result)
}

arr_nmbr_factorial(x) 
factorial(number_below_x)

//Prime number : > 1 
function verify_prime(nmbr){
    if (nmbr%2 === 0 &&	nmbr!=2  || nmbr%3 === 0 && nmbr!=3 || elm%7 === 0 && elm!=7){
        console.log('The number', nmbr, 'is not a prime number')
    }
    else {
        console.log('The number',nmbr,'is a prime number')
    }
}
verify_prime(5) 

//Fibonacci Sequence 
function fabonnici(number){
    let first_number = 0, second_number = 1, fabonnici_number = 0 
    console.log('This the fabonnici seqence of',number ,'numbers')
    for ( let i = 0 ; i<number;i++){
        fabonnici_number = first_number + second_number
        console.log(fabonnici_number)
        first_number = second_number
        second_number = fabonnici_number
    }
}
fabonnici(8)
