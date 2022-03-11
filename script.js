"use strict";

function plusMinus(arr) {
  // I need to loop through the array and check each value

  // I need a counter for each positive, negative and 0

  let positiveInt = 0;
  let negativeInt = 0;
  let zeroInt = 0;

  for (let i = 0, max = arr.length; i < max; i++) {
    // console.log(`${Math.sign(arr[i])}`);

    if (Math.sign(arr[i]) === 1) {
      positiveInt++;
    } else if (Math.sign(arr[i]) === -1) {
      negativeInt++;
    } else if (Math.sign(arr[i]) === 0) {
      zeroInt++;
    } // end if statement
  } // end for loop

  console.log(`${(positiveInt / arr.length).toFixed(6)}`);
  console.log(`${(negativeInt / arr.length).toFixed(6)}`);
  console.log(`${(zeroInt / arr.length).toFixed(6)}`);
}
