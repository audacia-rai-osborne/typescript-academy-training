const number1:number = 1;
const number2:number = 2;
const number3:number = 3;
const number4:number = 4;
const number5:number = 5;

export function additions(num1:number, num2:number){
    let num3 = num1 + num2
    return num3
}

function subtraction(num1:number, num2:number){
    let num3 = num1 - num2
    return num3
}

function multiplication(num1:number, num2:number){
    let num3 = num1 * num2
    return num3
}

function exponentiation(num1:number, num2:number){
    let num3 = num1 ** num2
    return num3
}

function division(num1:number, num2:number){
    let num3 = num1/num2
    return num3
}

function modulus(num1:number, num2:number){
    let num3 = num1%num2
    return num3
}

function increment(num1:number){
    let num2 = ++num1
    return num2
}

function decrement(num1:number){
    let num2 = --num1
    return num2
}

function mod(
    num1:number, num2:number
    ):[quotient: number, remainder: number]{
    let quotient: number = ~~(num1/num2);
    let remainder: number = num1%num2;

    return [quotient, remainder];
}


function perfectSquare(num1: number){
    let squared = Math.sqrt(num1)
    let check = Number.isInteger(squared)
    if (check){
        console.log("yes " + num1 + " is a perfect square")
    }else{
        console.log("no " + num1 + " is not a perfect square")
    }
}


// console.log(additions(number1, number2))
// console.log(subtraction(number2, number1))
// console.log(multiplication(number5, number2))
// console.log(exponentiation(number5, number2))
// console.log(division(number4, number2))
// console.log(modulus(number5, number2))
// console.log(increment(number1))
// console.log(decrement(number4))
//console.log(mod(number5, number2))
 perfectSquare(15)




