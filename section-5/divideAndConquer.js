// -------- Divide and Conquer ---------
/*
Pola (pattern) ini melibatkan membagi sebuah data set menjadi potongan yg lebih kecil dan mengulangi prosesnya dengan sebuah sebset data

Pola ini bisa sangat mengurangi time complexity (waktu yg diperlukan untuk menyelesaikan sebuah proses)

Contoh
Diberikan sebuah array integer berurutan, tulislah sebuah function yg bernama search, that menerima sebuah nilai dan me-return index dimana value yg diberikan ke function telah ditemukan. Jika nilai tidak ditemukan, return -1

Contoh input dan output
search([1,2,3,4,5,6], 4) -> 3
search([1,2,3,4,5,6], 6) -> 5
search([1,2,3,4,5,6], 11) -> -1
*/

// Solusi 1 naive - Big O(n)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Solusi 2 divide and conquer - Big O log(n)
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    console.log(middle);
    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return currentElement;
    }
  }
  return -1;
}
