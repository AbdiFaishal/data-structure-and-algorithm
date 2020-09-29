/* 
----------------Contoh---------------
Buatlah sebuah function yg bernama same, yg mana menerima input 2 buah array. Function harus me-return true jika setiap nilai pada array memiliki nilai yang sesuai yg dikuadratkan di array kedua

Catatan: urutan tidak bermasalah
Contoh input dan output : 
same([1,2,3], [4,1,9]) -> true
same([1,2,3], [1,9]) -> false
same([1,2,1], [4,4,1]) -> false (must be same frequency)
*/

// Solusi 1 Naive - Time complexity N^2 atau Big O(n2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop pertama (for loop)
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // loop kedua (indexOf)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
    console.log(arr2);
  }
  return true;
}
console.log(same([1, 2, 3], [4, 1, 9]));

// Solusi 2 refactor - Time complexity N atau Big O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let sameFrequency1 = {};
  let sameFrequency2 = {};

  for (let val of arr1) {
    sameFrequency1[val] = (sameFrequency1[val] || 0) + 1;
  }
  for (let val of arr2) {
    sameFrequency2[val] = (sameFrequency2[val] || 0) + 1;
  }

  for (let key in sameFrequency1) {
    if (!(key ** 2 in sameFrequency2)) {
      return false;
    }
    if (sameFrequency1[key] !== sameFrequency2[key ** 2]) {
      return false;
    }
  }
  return true;
}
