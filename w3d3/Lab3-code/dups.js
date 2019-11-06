/**
 * Create array without duplicate entries
 *
 * @param {Array} numList iterable list of values (may contain duplicates)
 * @returns {Array} array of all values in original order from numList without duplicate values
 */
function removeDups(numList){
  let map = new Map();
  for (let num of numList){
    map.set(num,"");
  }
  let array = [];
  for (let num of map.keys()) {
    array.push(num);
  }
  return array;
}