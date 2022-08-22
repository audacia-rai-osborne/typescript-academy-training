export function GreaterThan(num2:number, num3:number):boolean{
    //console.log(num2>num3);
    return num2>num3
}

export function LessThan(num2:number, num3:number):boolean{
    //console.log(num2<num3)
    return num2<num3
}

export function GreaterThanOrEqualToo(num2:number, num3:number){
    console.log(num2>=num3)
}

export function LessThanOrEqualToo(num2:number, num3:number){
    console.log(num2<=num3)
}

export function Equality(num2:number, num3:number){
    console.log(num2===num3)
}

export function NotEqual(num2:number, num3:number){
    console.log(num2!==num3)
}

export function between(num1:number, num2:number, num3:number){
    if(num1 > num2){
        let b = num1 > num3 && num3 > num2
        console.log(num3 + " being between " + num1 + " and " + num2 + " is " + b)
    }else{
        let c = num3 < num2 && num3 > num1
        console.log(num3 + " being between " + num1 + " and " + num2 + " is " + c)
    }
}

export function posAndNeg(num1:number){
    if(num1 > 0){
        console.log(num1 + " is postive")
    }else{
        console.log(num1 + " is negative")
    }
}

export function addAndCompare(express1:any, express2:any){
    console.log(express1 > express2)
}
