/* 
----------------Soal---------------
Diberi dua string, buatlah sebuah function untuk menentukan apakah string kedua adalah anagram dari string pertama. Anagram adalah sebuah kata, frasa (ungkapan), nama yg dibentuk dengan mengatur ulang karakter/huruf-huruf nya, seperti cinema menjadi iceman

Contoh input dan output : 
validAnagram([''], ['']) -> true
validAnagram(['aaz'], ['zza']) -> false
validAnagram(['anagram'], ['nagaram']) -> true
validAnagram(['rat'], ['car']) -> false
validAnagram(['awesome'], ['awesom']) -> false
validAnagram(['qwerty'], ['qeywrt']) -> true
validAnagram(['texttwisttime'], ['timetwisttext']) -> true
*/

// Solusi 1 Naive - Big O(n^2)
function validAnagram(str1, str2) {
  if (str1 === '' && str2 === '') {
    return true;
  }

  if (str1 === str2) {
    return true;
  }

  if (str1.length !== str2.length) {
    return false;
  }

  let arr1 = str1.split('');
  let arr2 = str2.split('');

  for (let i = 0; i < str1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i]);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Solusi 2 - Big O(n)
function validAnagram(str1, str2) {
  if (str1 === '' && str2 === '') {
    return true;
  }

  if (str1 === str2) {
    return true;
  }

  if (str1.length !== str2.length) {
    return false;
  }

  let anagram1 = {};

  for (let char of str1) {
    anagram1[char] = ++anagram1[char] || 1;
  }

  console.log('obj: ', anagram1);

  for (let char of str2) {
    if (!anagram1[char]) {
      return false;
    } else {
      anagram1[char] -= 1;
    }
  }
  return true;
}

validAnagram('cinema', 'iceman');

// Solusi 3 - Big O(n) code lebih sedikit
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1 === '' && str2 === '') {
    return true;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  for (let i = 0; i < str1.length; i++) {
    let char = str2[i];
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
}
