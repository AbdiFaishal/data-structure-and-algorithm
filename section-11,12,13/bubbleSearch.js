/* 
----------BubbleSort---------
A sorting algorithm where the largest values bubble up to the top!

Before we sort, we must swap!
Many sorting algorithms involve some type of swapping functionality (e.g swapping to numbers to put them in oreder)

BubbleSort Pseudocode 
- Start looping from with a variable called i at the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those values!
- Return the sorted array
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

/* ---------------------------------- */

// Solusi 1 - Bubble Sort Big O (n^2)
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([3, 1, 5, 6, 2, 10, 9]);

// Solusi 2 Optimized - Bubble Sort Big O (n^2)
function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

bubbleSort([3, 1, 3, 5, 6, 7, 9]);
