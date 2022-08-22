let i:number;
let num:number = 0;
let newArray:number[] = [-1, 2, 3, 5, 8, 13, 21, 34];

function findValue(n:number, nArray:number[]):boolean{
    for(i = num; i < nArray.length; i++){
        if (nArray[i] === n){
            console.log(true)
            return true
        }
    }
    console.log(false)
    return false
}

findValue(2, newArray);
findValue(5, newArray);
findValue(6, newArray);
findValue(99, newArray);

//find the value within the array that has been passed in