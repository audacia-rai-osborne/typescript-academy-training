function startCallingBingoNumbers():number{
  const isArrayEmpty = (currentValue:number)=>
//just put what you want to be true straight in here
    'undefined' == typeof currentValue || null === currentValue;

    let checkNumb:number = 0;
    let whileLoop:number = 0;
    let trackingArray:number[] = []
    let countArray = Array.from(Array(99).keys()).map(x => x + 1);
    do{
    checkNumb = Math.floor(Math.random()*countArray.length)
    trackingArray[checkNumb-1] = checkNumb
    countArray.splice(checkNumb, 1)
    whileLoop++
    } while (isArrayFull(trackingArray) === false && countArray.every(isArrayEmpty) === false)
    console.log(whileLoop)
    return whileLoop
}

startCallingBingoNumbers()

function isArrayFull( arr:number[] )
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



//wants me to call each number between 1-99 once and keep track of this and only stop the loop once each has been called once
//how to make sure they're all only called once??
//
//store each number in array under corresponding i-1 value, when array has 98 enteries it can stop the loop
//intialise array at 98 and if not full then continue looping
//actually need to check if there's any null enteries

//can be improved by being aware of whether a number has already been called?? 
//rather than just doing by 100 set up an array that a random one is being called from and remove that number from array once completed

