      // Normal sentence into camel case sentence - achiving many ways
			const text = "tExt mE evEniNg";
			
			console.log(camelCase(text.toLowerCase()));

			//camel Case 
			function camelCase(text){
				var rtrValue = text.split(' ').map((word,index) => index ===0 ? word.toLowerCase() : word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join('');
				return rtrValue;
			}
				
			//Camel case example 2
			let camelConvertion = text.split(' ').map((word,index) => index ===0 ? word.toLowerCase() : word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join('');
			console.log(camelConvertion);

			//Camel Case example 3
			let camel2 = text.split(' ');
			let output = '';
			camel2.forEach((word,index) => 
				output += index === 0? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
			);
 			console.log(output);

			//First Ltter should be capital
			let firstLetter = text.split(' ').map((word) => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' ');
			console.log(firstLetter);

			//Last letter should be capital
			let lastletter = text.split(' ').map((word) => word.slice(0,-1).toLowerCase() + word.charAt(word.length-1).toUpperCase()).join(' ');
			console.log("Last Charector = " +lastletter);


			// Fiest and Last letter should be capital
			let lastAndFirst = text.split(' ').map((word) =>  word.charAt().toUpperCase() + word.slice(1,-1).toLowerCase() + word.charAt(word.length-1).toUpperCase()).join(' ');
			console.log(lastAndFirst);
