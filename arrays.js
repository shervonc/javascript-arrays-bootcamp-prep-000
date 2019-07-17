var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningofArray(array, element) {
 return [element,...array];
}

function destructivelyAddElementToBeginnngofArray(array, element) {
   
  return array.unshift(element)
  return array
}

function addElementToEndofArray(array, element) {
 return [...array, element];
}

function destructivelyAddElementToEndofArray(array, element){
    array.push(element)
    return array;
}
function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift()
  return array;
  }
  
  function removeElementFromBeginningOfArray(array) {
   return array.slice(1);
  }
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop()
    return array;
  }
  function removeElementFromEndOfArray(array) {
    return array.slice(0,array.length -1);
  }
  
  