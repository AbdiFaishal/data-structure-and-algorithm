/* 
----------Selection Sort---------
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

Selection Sort Pseudocode 
- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array
- If the 'minimum' is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted
*/

// ES5 ver. swap function
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015 ver. swap function
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// Solusi 1 Selection Sort - Big O (n^2)
function selectionSort(arr) {
  let lowest;
  for (let i = 0; i < arr.length - 1; i++) {
    lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }
  return arr;
}
