function breakOut(array, changeValue, stopValue){
  var i;
  for(i = 0; i < array.length; i++){
    if(array[i] === stopValue)
      break;
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  var i;
  for(i = 0; i < array.length; i++){
    if(array[i] === skipValue)
      continue;
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn){
  var i;
  for(i = 0; i < array.length; i++){
    if(findFn(array[i]))
      return array[i];
  }
  return null;
}
