/* 
-----Helper Method Recursion-------
Recursive didalam sebuah function
*/

// function 1 - untuk mengumpulkan angka yg ganjil dari sebuah array

function collectOdds(nums) {
  let result = [];

  function helper(input) {
    if (input.length === 0) {
      return;
    }

    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }

    helper(input.slice(1));
  }

  helper(nums);

  return result;
}
