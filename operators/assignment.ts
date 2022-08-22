export function SimpleAssignment(num1:number, num2:number){
    let z = num1 + num2;
    console.log(z);
}

export function AddAssignment(num1:number, num2:number){
    num1 += num2;
    console.log(num1);
}

export function SubtractAssignment(num1:number, num2:number){
    num1 -= num2;
    console.log(num1);
}

export function MultiplyAssignment(num1:number, num2:number){
    num1 *= num2;
    console.log(num1);
}

export function DivideAssignment(num1:number, num2:number){
    num1 /= num2;
    console.log(num1);
}

export function modAssignment(num1:number, num2:number){
    let d = num1%num2;
    num1 /= num2;
    console.log('quoitent ' + ~~num1 + ' remainder ' + d);
}