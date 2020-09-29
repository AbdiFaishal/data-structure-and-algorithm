/*
--------Merging Arrays Pseudocode------
- Create an empty array, take a look at the smallest values in each input array
- while there are still values we haven't looked at...
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
*/

// Solusi dari video
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (j < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

merge([2, 1], [4, 5]);

//  Solusi 1
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result = [...result, arr1[i]];
      i++;
    } else {
      result = [...result, arr2[j]];
      j++;
    }
    if (i === arr1.length) {
      result = result.concat(arr2.slice(j));
      break;
    }
    if (j === arr2.length) {
      result = result.concat(arr1.slice(i));
      break;
    }
  }
  return result;
}

//  Solusi 2
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  if (!arr1.length) {
    return arr2;
  }

  if (!arr2.length) {
    return arr1;
  }

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
    if (i === arr1.length) {
      result.push(...arr2.slice(j));
      break;
    }

    if (j === arr2.length) {
      result.push(...arr1.slice(i));
      break;
    }
  }
  return result;
}

merge([1, 10, 50, 101], [2, 14, 99, 100]);
