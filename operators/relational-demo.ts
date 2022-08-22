import { additions } from "./math";
import { addAndCompare, between, Equality, GreaterThan, GreaterThanOrEqualToo, LessThan, LessThanOrEqualToo, NotEqual, posAndNeg } from "./relational";

const number6:number = 6;
const number7:number = 7;
const number8:number = 8;
const number9:number = 9;
const number10:number = 10;

GreaterThan(number6, number10)
LessThan(number7, number9)
GreaterThanOrEqualToo(number8, number10)
LessThanOrEqualToo(number8, number6)
Equality(number9, number9)
NotEqual(number6, number7)
between(number8, number6, number7)
posAndNeg(number7)

addAndCompare(additions(number6, number10), additions(number7, number10))



