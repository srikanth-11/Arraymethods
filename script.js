let arr = [1,3,8,10,11,9,0];
// _.head

function myHead(inputArray){
  return inputArray[0];
}
console.log(myHead(arr))

////////////////// - _.chunk
function mychunk(inputArray,size){
  let finalArray = [];
  for(i=0;i<inputArray.length;i+=size){
        finalArray.push(inputArray.slice(i,size+i))
    }
      return finalArray
    }
console.log(mychunk(arr,1));

// reduce
const summingFolder = 
  (accumulator, current) => {
    return current + accumulator
  }
function myreducer(folder, initialAccumulatorValue, array) {
    let accumulatorValue = initialAccumulatorValue
    for (let i = 0; i < array.length; i++) {
      const current = array[i]
      
      
      accumulatorValue =
        folder(accumulatorValue, current)  
    
    }
    return accumulatorValue 
  }
  
console.log(myreducer(summingFolder,0,[1,3,8,9,0]))

//_.first
function mycustomFirst(inputArray){
  return inputArray[0];
}
console.log(mycustomFirst(arr));
// _.last
function mycustomLast(inputArray){
  return inputArray[inputArray.length-1];
}

console.log(mycustomLast(arr));



//_.nth(array, elementAt)
 arr = ['a', 'b', 'c', 'd', 'u']
function myNthEle(inputArray, elementAt){
  if(elementAt >= 0){
    return inputArray[elementAt];
  } else{
    let index = inputArray.length + elementAt;
    if(index < 0){
      return undefined;
    }
    return inputArray[index];
  }
}

console.log( myNthEle(arr, 2));

//_.take(arr)
arr = ['a', 'b', 'c', 'd', 'e'];
function mycustomTake(arr, index = ''){
  if(index === ''){
    index = 1;
  } else if( index > arr.length){
    index = arr.length;
  }

  let takearr = [];
  for(let i = 0; i < index; i++){
    takearr.push(arr[i]);
  }

  return takearr;
}


console.log(mycustomTake(arr,4));