const result = removeDuplicates("Elangovan Mathan");
console.log(result);

function removeDuplicates(input){
  var orgValues = [];
  var duplicateValues = [];
  var seen = {}

  for(let i=0; i < input.length; i++){
    if(input[i] === ' ') {continue;}
    if(!seen[input[i]]){
      orgValues.push(input[i]);
      seen[input[i]] = true;
    }
    else{
      duplicateValues.push(input[i]);
    }
  }
  console.log(duplicateValues);
  console.log("Duplicate Values Count: "+duplicateValues.length);
  console.log(orgValues);
  return "Orginal Values Count: "+ orgValues.length;
}
