let number21:any = 21;
let number22:number = 22;
let number23:number = 23;

let string1:any = "hello"
let string2:string = "goodbye"
let string3:string = "rai"

function posAndNeg(num1:number, num2:number){
    let testExpression:boolean = num1>num2;
    const ternaryResult: any = testExpression ? console.log(num1+num2): console.log(num1-num2)
};
posAndNeg(number21, number22);

function multiTen(num1:number, num2:number){
    let testExpression:boolean = num1>num2;
    const ternaryResult: any = testExpression ? console.log(string1): num2>num1 ? console.log(string2): num2===num1? console.log(string3): console.log("all wrong")
};
multiTen(number21, string1);

// function checkNumbers(express1, express2){
//     let secondTestExpression:boolean = express1 instanceof Number && express2 instanceof Number
//     const secondTernaryResult: any = secondTestExpression ? console.log(express1+express2): console.log("Not all test parameters are numbers")
// }
// checkNumbers(number21, number22)

// console.log(string1 instanceof String)
// console.log(number21 instanceof Number)

//instance of doesn't work but it isn't supposed to