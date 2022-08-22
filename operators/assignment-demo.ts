import { AddAssignment, DivideAssignment, modAssignment, MultiplyAssignment, SimpleAssignment, SubtractAssignment } from "./assignment";

let number16:number = 16;
let number17:number = 17;
let number18:number = 18;
let number19:number = 19;
let number20:number = 20;
let number40:number = 40;

SimpleAssignment(number16, number20);
AddAssignment(number17, number20);
SubtractAssignment(number19, number18);
MultiplyAssignment(number20, number16);
DivideAssignment(number40, number20);
modAssignment(number20, number16)