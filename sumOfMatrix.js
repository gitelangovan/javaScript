//Finding the sum of row
function sumAdd(sumArr) {
	var res = [];
	var res2 = [];
	for (i = 0; i < sumArr[0].length; i++) {
		var sum = 0;
		for (j = 0; j < sumArr.length; j++) {
			sum += sumArr[j][i];
			//var sum1 = 0;

		}
		//res2.push(sum1);
		res.push(sum);
	}
	console.log(res);
}

var sumMatrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 2, 3, 4]
];

sumAdd(sumMatrix);


//Remove duplicate values from the array
var duplicateArray = [1, 3, 5, 1, 6, 11, 1, 45, 8, 3, 10, 15, 1, 6, 3,];
console.log(fixArr(duplicateArray));

function fixArr(arrValue) {
	var x = [...new Set(arrValue)];
	var y = x.sort((a, b) => a - b);
	return y;
}
