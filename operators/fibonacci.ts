var num:number = 0;
var i:number;

function fibonacciSequence(
    fibNumber: number,
    fibArray: number[]):
    [fibNumber: number]{

    for (i = num; i<=10; i++){
        var fibNumber = fibArray[i] + fibArray[i+1];
        fibArray.push(fibNumber);
    }

    console.log(fibArray);
    return [fibNumber];
    
 }

 fibonacciSequence(0,[0,1])

