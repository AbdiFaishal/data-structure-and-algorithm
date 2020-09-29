/* 
-----Pure Recursion-------
Masih dengan soal yg sama di function helperMethodRecursion.js tapi menggunakan recursive murni (pure recursion)
*/

// function 1 - untuk mengumpulkan angka yg ganjil dari sebuah array

function collectOdds(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOdds(arr.slice(1)));

  return newArr;
}
