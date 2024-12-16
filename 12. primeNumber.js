// Prime Numbers
function checkPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num/2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
  

for (let i = 2; i <= 1000; i++) {
  if (checkPrime(i)) {
    console.log(i);
  }
}

