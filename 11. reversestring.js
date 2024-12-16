const value = "Thaaranya";
var result = "";

function reverseString(obj) {
  let tempString = "";
  var input = [...obj];

  for (let i = input.length - 1; i >= 0; i--) {
    // tempString += input[i];
    // result = tempString.split('');
    result += input[i];
  }

  return result;
}

console.log(reverseString(value))
