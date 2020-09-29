// -------Multiple Pointers-------
/*
Membuat pointer atau nilai yg sesuai dengan index atau posisi dan bergerak menuju awal, akhir, atau tengah berdasarkan kondisi tertentu

Sangat efisien untuk memecahkah masalah dengan minimal space complexity demikian juga 
*/

// Contoh
/*
Buatlah sebuah function yang bernama sumZero yg mana menerima array integer yang berurutan. Function tersebut harus menemukan pasangan pertama yg jumlahnya adalah 0, me-return sebuah array yg termasuk kedua nilai dari penjumlahan 0 atau undefined jika nilai pasangan nya tidak ada

contoh input dan output
sumZero([-3, -2, -1, 0, 1, 2, 3]) -> [-3, 3]
sumZero([-2, 0, 1, 3]) -> undefined
sumZero([1, 2, 3]) -> undefined
*/

// Solusi 1 - Big O(n^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Solusi 2 - Big O(n)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
}
