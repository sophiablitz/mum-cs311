/**
 * Determine if a list of numbers contains two elements with a particular sum
 *
 * @param {Array} numList Array of numbers
 * @param {number} numZ sum to check for
 * @returns {boolean} true if array contains two numbers with sum of numZ, false otherwise
 */
function checkForSum(numList, numZ) {
  let map = new Map();
  for (let num of numList){
    if (map.has(numZ - num)){
      return true;
    }else{
      map.set(num,num);
    }
  }
  return false;
}