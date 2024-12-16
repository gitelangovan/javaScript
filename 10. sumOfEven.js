const itrNumber = 3;
var sum = 0;

function oddNumbers(nums) {
  for (let i = 1; i <=nums; i++) {
    sum += 2*i;
  }
  return sum;
}
console.log(oddNumbers(itrNumber));
