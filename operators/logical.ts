import { GreaterThan, LessThan } from "./relational";

export function andFunction(num1:any, num2:any, num3:any, num4:any){
     //console.log(LessThan(num1, num2));
    //  console.log(GreaterThan(num3, num4));
    //  console.log(LessThan(num1, num2) && GreaterThan(num3, num4));
    console.log((num1 && num2)||(num3 && num4))
}

export function orFunction(exp1:boolean, exp2:boolean){
    console.log(exp1 || exp2)
}

export function notFunction(exp1:boolean){
    console.log(!exp1)
}
