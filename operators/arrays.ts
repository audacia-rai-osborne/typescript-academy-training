let testArrayOne:number[] = [1,2,3,4,5];
let testArrayTwo:number[] = [1,2,3,4,5,6,7,8,9,10];

// console.log(testArrayOne);
// console.log(testArrayTwo);

function addition(num1:number[], num2:number[]){
    let num3 = num1[3] + num2[3]
    console.log(num3)
}

addition(testArrayOne, testArrayTwo)