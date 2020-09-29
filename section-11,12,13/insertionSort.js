/* 
----------Insertion Sort---------
Builds up the sort by gradually creating a larger sorted half which is always sorted

Selection Sort Pseudocode 
- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e the left side) to place the element in the correct place
- Repeat until the array is sorted
*/

// Solusi 1 (dari video)
function insertionSort1(arr) {
  let currentVal, i, j;
  for (i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// Solusi 2 refactor (agar mudah dibaca)
function insertionSort(arr) {
  let currentVal, i, j;
  for (i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 7, 3, 6, 5]);
