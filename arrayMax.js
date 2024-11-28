let arrList = [10,05,23,103,77,07,1.5,44,63.5];

//Note: Create two html elemts with id to print inside the date
function findLargestNumber(arr) {
		document.getElementById("maxNumber").innerHTML = Math.max(...arr);
		document.getElementById("minNumber").innerHTML = Math.min(...arr);
}

//We can use this two lines to print output
var maxNumber = Math.max(...arrList);
var minNumber = Math.min(...arrList);
console.log("Maximum Number -"+maxNumber +', ' +"MinimumNumber - "+ minNumber);
