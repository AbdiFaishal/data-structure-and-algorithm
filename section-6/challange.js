/*
Buatlah sebuah function yg mana menerima input 2 buah angka (tidak harus berurutan). Function harus me-return true jika setiap nilai pada tiap digit angka tersebut memiliki kesamaan meski tidak berurutan.

Contoh input dan output
sameFrequency(12133, 31231) -> true
sameFrequency(9018824, 2908184) -> true
sameFrequency(1212, 12121) -> false
*/

function sameFrequency(num1, num2) {
  let numStr1 = num1.toString();
  let numStr2 = num2.toString();
  if (numStr1.length !== numStr2.length) {
    return false;
  }

  let frequency1 = {};
  let frequency2 = {};

  for (let i = 0; i < numStr1.length; i++) {
    let str1 = numStr1[i];
    let str2 = numStr2[i];

    frequency1[str1] ? (frequency1[str1] += 1) : (frequency1[str1] = 1);
    frequency2[str2] ? (frequency2[str2] += 1) : (frequency2[str2] = 1);
  }

  for (val in frequency1) {
    if (frequency1[val] !== frequency2[val]) return false;
  }

  return true;
}

/*
Buatlah sebuah function yg menerima sebuah input berupa string dan me-return true jika ada huruf yg sama dan me-return false jika tiap huruf nya unik

Contoh input dan output
areThereDuplicate('banana') -> true
areThereDuplicate('trotoar') -> true
areThereDuplicate('abdi') -> false
*/

// Solusi 1 - Big O(n)
function areThereDuplicate(str) {
  let collection = {};

  for (let char of str) {
    collection[char] ? (collection[char] += 1) : (collection[char] = 1);
  }

  for (let val in collection) {
    if (collection[val] > 1) return true;
  }

  return false;
}
