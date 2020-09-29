// ----------Slidiing Window-----------
/*
Pola ini melibatkan pembuatan jendela (window) yang bisa berupa array atau angka dari satu posisi ke posisi lain

Tergantung pada kondisi tertentu, jendela meningkat atau tertutup (dan jendela baru dibuat)

Sangat berguna untuk melacak subset data dalam array / string

Contoh
Buatlah sebuah function bernama maxSubarraySum yg menerima sebuah array integer dan sebuah angka bernama n. Function nya harus menghitung jumlah maksimum dari n elemen berurutan didalam array

Contoh input dan output
maxSubarraySum([1,2,5,2,8,1,5], 2) -> 10
maxSubarraySum([1,2,5,2,8,1,5], 4) -> 17
maxSubarraySum([4,2,1,6], 1) -> 6
maxSubarraySum([4,2,1,6,2], 4) -> 13
maxSubarraySum([], 4) -> null
*/

// Solusi 1 Naive - Big O(n^2)
function maxSubarraySum(arr, n) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Solusi 2 Refactor - Big O(n)
function maxSubarraySum(arr, n) {
  if (num > arr.length) {
    return null;
  }

  let max = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  temp = max;

  for (let i = n; i < arr.length; i++) {
    temp = temp + arr[i] - arr[i - n];

    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
