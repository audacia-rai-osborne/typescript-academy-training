let firstLet: number = 1;
let secondLet: string = "second";
let thirdLet: boolean = true;
let fourthLet: void;
let fifthLet = null;
let sixthLet;


var firstVariable: Number = 3;
var secondVariable: string = "fourth";
var thirdVariable: boolean = false;
var fourthVariable: void;
var fifthVariable = null;
var sixthVariable;

const firstConstant: boolean = true;
const secondConstant: string = "fifth";
const thirdConstant: boolean = true;
// const fourthConstant: void;
const fifthConstant  = null;
// const sixthConstant; 

let arrayOne = [5,6,7,8];

console.log(arrayOne[2]);

arrayOne[2] = 9;

console.log(arrayOne[2]);
console.log(arrayOne);

let nameOfVariable: Date | null = null;
let dateVariable: Date = new Date(2022, 12);
console.log(dateVariable);

function firstFunction(
    number1: number,
    number2: number
):[number3: number]{
    let number3 = number1 + number2;
    return [number3];
}

function GoodMorning(
    name: string,
    print: boolean = true
) {
    var morning:string = "good morning " + name;
    var empty:string = "no morning"
    if (print){
    return morning
    }
    else{
       return empty
}
}

console.log(GoodMorning("Rai", true));

// recursion practice
// named function can they access global variables??

// console.log(firstFunction(7,3));
