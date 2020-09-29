/* 
------Linear Search Pseudocode------
- Function ini menerima input sebuah array dan sebuah value (2 input)
- Loop melalui array dan cek apakah element array saat ini sama dengan input value
- Jika iya, return index element array nya
- Jika value tidak ditemukan, return -1
*/

// Solusi 1
function search(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
