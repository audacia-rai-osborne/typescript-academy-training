function startCallingBingoNumbersTwo():number{
    let checkNumbTwo:number = 0;
    let whileLoopTwo:number = 0;
    //let arrayMax:number = 99;
    let trackingArrayTwo:number[] = [];
    checkNumbTwo = Math.floor(Math.random()*100)
    trackingArrayTwo[99] = 100
    console.log(trackingArrayTwo)
    while(isArrayFullTwo(trackingArrayTwo) === false){
    checkNumbTwo = Math.floor(Math.random()*100)
    trackingArrayTwo[checkNumbTwo-1] = checkNumbTwo
    whileLoopTwo++
    } 
    console.log(whileLoopTwo)
    return whileLoopTwo
}


startCallingBingoNumbersTwo()

function isArrayFullTwo( arr:number[] )
{
  for ( var i = 0, l = arr.length; i < l; i++ )
  {
    if ( 'undefined' == typeof arr[i] || null === arr[i] )
    {
      return false
    }
  }
  return true;
}

//not actually more effective than do while