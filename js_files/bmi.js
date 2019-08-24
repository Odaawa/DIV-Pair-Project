const bmi_calc = function(mass, height){
	mass = document.getElementById('weight_kg').value;//the additional value part is what accesses the user input
	height = document.getElementById('height_m').value;
	const result= mass/Math.pow(height,2);
	const bmi_index = result.toFixed(1);//toFixed() method reduces number of dp to what is specified in the brackets

//this would require js to look through html file, identify display_1 under bmi and assign bmi_index to value
//user would then see bmi_index value in display area 1
    document.bmi.display_1.value = bmi_index;

    //recommendation messages depending on bmi status
    const text_1 =`Be mindful of what you eat. Do well to see your doctor for help.`;
    const text_2 =`Watch your weight, a bit of dieting, healthy eating and exercising might just do the trick.`;
    const text_3 =`You're good to go, keep up with healthy lifestyle practices.`;
    const text_4 =`You really need to start eating more, and healthily too.`;
	 
    //varies output message and status depending on bmi
	if(bmi_index >= 30){
		const status = `Obese`;
		document.bmi.display_2.value = status;
		document.getElementById('status_text').innerHTML = text_1;
	}else if(bmi_index >= 25){
		const status = `Overweight`;
		document.bmi.display_2.value = status;
		document.getElementById('status_text').innerHTML = text_2;
	}else if(bmi_index >= 18.5){
		const status = `Normal weight`;
		document.bmi.display_2.value = status;
		document.getElementById('status_text').innerHTML = text_3;
	}else if(bmi_index < 18.5){
		const status = `Underweight`;
		document.bmi.display_2.value = status;
		document.getElementById('status_text').innerHTML = text_4;
	}
    
}

function clearDisplay(){
	document.bmi.display_1.value = "";
	document.bmi.display_2.value = "";
	document.bmi.height.value = "";
	document.bmi.mass.value = "";
};






