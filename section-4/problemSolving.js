// Pahami Masalahnya
/**
 * Dapatkah saya menjelaskan masalahnya dengan bahasa saya sendiri (yang mudah dimengerti oleh kita)?
 * Apa saja input yg menjadi penyebab masalah?
 * Apa output yang seharusnya keluar dari solusi masalah tersebut?
 * Dapatkah hasil output ditentukan dari input? dengan kata lain, apakah saya memiliki informasi yang cukup untuk menyelesaikan masalah? (Anda mungkin tidak dapat menjawab pertanyaan ini sampai anda mulai menyelesaikan masalahnya. Tidak apa-apa; masih perlu mempertimbangkan pertanyaan pada tahap awal ini)
 * Bagaimana cara memberi label pada bagian data penting yang merupakan bagian dari masalah?
 */

//  -------------CONTOH--------------
// Soal : tulislah sebuah function yg mana menerima dua angka dan me-return jumlahnya

function sumOfTwo(a, b) {
  return a + b;
}
console.log(sumOfTwo(5, 10));

// Soal : Tulislah sebuah function yang menerima sebuah string dan return jumlah dari setiap karakter dalam string tersebut

charCount('Your PIN number is 1234!');
/* 
{
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  b: 1,
  e: 1,
  i: 2,
  m: 1,
  n: 2,
  o: 1,
  p: 1,
  r: 2,
  s: 1,
  u: 2,
  y: 1
}
*/

function charCount(str) {
  // lakukan sesuatu
  // return sebuah object dengan keys yang merupakan karakter alfanumerik huruf kecil dalam string, values harus jumlah dari karakter
}

function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

// Refactor 1 - merubah loop menjadi for of loop
function charCount(str) {
  let result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

// Refactor 2 - merubah if else menjadi truthy conditional
function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// Refactor 3 - merubah regex menjadi char code untuk menambahkan performa (menjadi lebih cepat)
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // Numeric (0-9)
    !(code > 64 && code < 91) && // Upper alpha (A-Z)
    !(code > 96 && code < 123) // Lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
