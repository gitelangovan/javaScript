<!DOCTYPE html>
<html>
	<head></head>
	<body>
		<script>
			//Object to array using Object Static Method
			const empDetails = {name: 'elangovan', age: 27, address: 'chennai'};
			
			const objKeys = Object.keys(empDetails);
			//console.log(objKeys);

			const objKValues = Object.values(empDetails);
			//console.log(objKValues);

			const objAll = Object.entries(empDetails);
			console.log(objAll);
	
			//debugger
			var allArr = [];
			for(let arr in empDetails){
				allArr.push(arr,empDetails[arr]);
			}
			console.log(allArr);


				
			// Array into Objects
		
			const empDetails1 = ['name', 'elangovan'];
		
			var convObj = empDetails1.reduce((acc, crr, index) => {
				if(index % 2 ===0){
					acc[crr] = empDetails1[index+1];
				}
				return acc;
			}, {});
			console.log(convObj);
			
	
		</script>

	</body>
</html>
