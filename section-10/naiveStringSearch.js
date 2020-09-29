/*
----------Naive String Search----------
- Hitung berapa kali jumlah string yg lebih kecil muncur di string yg lebih besar 

*/

// Solusi 1
function searchString(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j !== long[i + j]]) {
        console.log('BREAK!');
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}
