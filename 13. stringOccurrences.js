// Check string occurrences
const result = checkOccurrence("Elangovan    Mathan");
console.log(result);

function checkOccurrence(input) {
  var eachCharCount = {}

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === ' ') { continue; } // Skip emnpty spaces

    else if (eachCharCount[char]) { 
      eachCharCount[char]++;
    }
    else { 
      eachCharCount[char] = 1;
    }
  }
  return eachCharCount;
}
