/*
Bagaimana recursive funtion bekerja ?
Recursive bekerja dengan memanggil (invoke) function yang sama / function itu sendiri dengan input yang berbeda sampai kita sampai pada kasus dasar (base case)

Base case = kondisi ketika recursive berhenti
*/

// Contoh 1 recursive - untuk print n sampai 0 secara menurun
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  console.log(num);
  num--;
  return countDown(num);
}

// Contoh 2 - untuk menjumlahkan angka 1 sampai n
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(5); // return 15 (1 + 2 + 3 + 4 + 5)

// Contoh 3 - n factorial
function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

factorial(4); // return 24 (4 * 3 * 2 * 1)
