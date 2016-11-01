//convertTemp(212, "C"); // > 100
//convertTemp(32, "C");  // > 0
//convertTemp(65, "C"); // > 18.333
//convertTemp(-40, "F"); // > -

function convertTemp (temp, targetTemp) {
	if (targetTemp ==="F") 
		{ console.log ("It is " + ((temp*1.8) + 32) + "F")
			 }

     else if (targetTemp ==="C")
     { console.log ("It is " + ((temp-32)/1.8) + "C")
			 }
}


console.log (convertTemp(212, "C")) 
console.log (convertTemp(32, "C")) 
console.log (convertTemp(65, "C"))
console.log (convertTemp(-40, "F")) 


