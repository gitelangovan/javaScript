const result = fibonacci(10);
console.log(result);

function fibonacci(nums){
  var num1=0,num2=1;
  var input = 0;
  var reutnAll = [num1, num2];
  
  for(let i=1; i < nums; i++){
    input = num1+num2;
    num1 = num2;
    num2 = input
    reutnAll.push(input);
  }
  return reutnAll;
}
