/*
------Radix Sort Helpers------
- getDigit(num, i) - return digit of i
- digitCount(num) - returns the number of digits in num
- maxDigits(nums) - return the most digit from the list of numbers

------Radix Sort Pseudocode-----
- Define a function that accepts list of numbers 
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop:
  * Create buckets for each digit (0 to 9)
  * Place each number in the corresponding bucket based on its kth digit
- Replace our existing array with values in our buckets, starting with 0 and goip up to 9
return list at the end!

*/

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigit = mostDigits(nums);
  let digitBuckets;
  for (let i = 0; i < maxDigit; i++) {
    digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      console.log(i, j);
      let digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
