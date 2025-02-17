
const heights2= [167, 190, 120, 165, 137];





function heighyNumber(numbers) {
  let large =numbers[0];
  for (const number of numbers)
  {
    if ( number>large) {
      large = number;
    }
  }
  return large;
}
const long=heighyNumber(heights2)
console.log("the largest bvalu is:", long);