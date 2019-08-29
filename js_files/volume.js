const choose = document.querySelector('.choose');
const user_input = document.querySelector('.user_input');
const output = document.querySelector('.app_output');

choose.addEventListener('change', get_option);

function get_option(){
	return choose.value;
}
var option = get_option();
 
function convert(){
	switch(option){
		//volume conversions
		case 'l-g':
           	convert_lg();
		break;
		case 'g-l':
           	convert_gl();
		break;
	}
}


//volume conversion functions
function convert_lg(){//litres to gallons
	const volume = user_input.value * 0.264172;
	output.value = volume.toFixed(3);
}
function convert_gl(){//gallons to litres
	const volume = user_input.value * 3.78541;
	output.value = volume.toFixed(3);
}

//clear display function- not working, check it out later
function clear_display(){
	document.querySelector('.user_input').value = " ";
	document.querySelector('.app_output').value = " ";
};
