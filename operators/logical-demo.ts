import { andFunction, notFunction, orFunction} from "./logical";
import { GreaterThan, LessThan } from "./relational";

let number11:number = 11;
let number12:number = 12;
let number13:number = 13;
let number14:number = 14;
let number15:number = 15;

let express1 = number12 > number11
let express2 = number13 < number14
let express3 = number11 === number12
let express4 = number15 < number11

//andFunction(express1, express2)
// orFunction(express3, express2)
// notFunction(express2)

//andFunction(number13, number14, number15, number12)

//can call functions in the function instead (need to change number of parameters being passed to 4) (make sure functions that are being called have return values)

andFunction(LessThan(number13, number14), GreaterThan(number12, number15), LessThan(number13, number14), GreaterThan(number11, number12))

