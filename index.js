function breakOut(array, changeValue, stopValue){
  var i;
  for(i = 0; i < array.length; i++){
    if(array[i] === stopValue)
      break;
    array[i] = changeValue;
  }
  return array;
}
