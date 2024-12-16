const itrNumber = 3;
var sum = 0;
var oddNumCount = 1;

function oddNumbers(nums) {
  for (let i = 0; i < nums; i++) {
    sum += oddNumCount;
    oddNumCount += 2;
  }
  if (sum % 2 === 0) {
    console.log("Given Number is Even", nums);
  }
  else {
    console.log("Given Number is Odd", nums);
  }
  return sum;
}

console.log(oddNumbers(itrNumber));
