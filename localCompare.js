			const empDetails = [{ name: 'Manoj', age: 31, exp: 10, address: 'Namakkal' },
								{ name: 'Arun', age: 28, exp: 6, address: 'Erode' },
								{ name: 'Elangovan', age: 27, exp: 3.6, address: 'Chennai' },
								{ name: 'Arul', age: 29, exp: 2, address: 'Coimbatore' }];
			var arr = [10,5.053,23,103,77,7,44,63.5];			

			// Populating data to dom element
			let sort1 = JSON.stringify(empDetails.sort((a, b) => a.age - b.age));
			let sort2 = JSON.stringify(empDetails.sort((a, b) => a.exp - b.exp));
			let sort3 = JSON.stringify(empDetails.sort((a, b) => b.name.localeCompare(a.name)));

			document.getElementById('output1').innerHTML = sort1;
			document.getElementById('output2').innerHTML = sort2;
			document.getElementById('output3').innerHTML = sort3;
			document.getElementById("output4").innerHTML = Math.min(...arr);
