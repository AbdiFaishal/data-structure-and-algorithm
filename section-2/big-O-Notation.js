// Big O Notation is a way to formalize fuzzy counting -

// It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

// Big O Definition
// We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

/* 
  - f(n) could be linear (f(n) = n)
  - f(n) could be quadratic (f(n) = n2)
  - f(n) could be constant (f(n) = 1)
  - f(n) could be something entirely different!
*/

// ---------Time Complexity----------
// Function yang menjumlahkan semua angka
// dari 1 sampai dengan (dan termasuk) beberapa angka n

// Fungsi ini lebih lambat O(n) - (f(n) = n)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(6));

// Contoh lain O(n) - (f(n) = n)
function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log('At the top!\nGoing down...');
  for (let j = n - 1; j >= 0; i--) {
    console.log(j);
  }
  console.log('Back down. Bye!');
}

// O(n) - (f(n) = n)
function logAtleast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// Fungsi ini lebih cepat O(1) - (f(n) = 1)
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

t1 = performance.now();
const sum = addUpTo2(500);
t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

// Contoh lain O(1) - (f(n) = 1)
function logAtMost5(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// O(n2) - (f(n) = n2)
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// ---------------Space Complexity-----------------
// We can also use big O notation to analyze space complexity:
// how much additional memory do we need to allocate in order to run the code in our algorithm?

// Auxiliary space complexity : space required by the algorithm, not including space taken up by the inputs

// Space Complexity in JS - Rules of Thumb
/**
 * Most primitives (booleans, numbers, undefined, null) are constant space
 * Strings require O(n) space (where n is the string length)
 * Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
 */

// -----------Contoh------------
// O(1) space
// let total = 0; -> one number
// let i = 0; -> another number
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// O(n) space
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

// ---------------Logarithms-----------------
// log2(8) = 3 --> 2³ = 8
// dibaca 'log base 2 of 8 equals 3'
// log2(value) = exponent --> 2exponent = value
// log === log2

// ------------Rangkuman-----------------
/**
 * Untuk menganalisis kinerja suatu algoritma, kami menggunakan Notasi O Besar
 * Notasi Big O dapat memberi kita pemahaman tingkat tinggi tentang kompleksitas ruang atau waktu suatu algoritma
 * Notasi O Besar tidak peduli dengan presisi, hanya tentang tren umum (linier? Kuadrat? Konstan?)
 * Kompleksitas waktu atau ruang (yang diukur dengan Big O) hanya bergantung pada algoritma, bukan perangkat keras yang digunakan untuk menjalankan algoritma
 * Notasi Big O ada dimana-mana, jadi perbanyak latihan!
 */
