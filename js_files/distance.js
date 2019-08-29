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
		//for distance conversions
		case 'm-y':
			convert_meters();
		break;
		case 'y-m':
			convert_yards();
		break;
	}
}


//distance conversion functions
function convert_meters(){//meters to yards
   const distance = user_input.value*1.09361;
   output.value = distance.toFixed(3);
}
function convert_yards(){//yards to meters
	const mass = user_input.value*0.9144;
	output.value = mass.toFixed(3);
}

//clear display function- not working, check it out later
function clear_display(){
	document.querySelector('.user_input').value = " ";
	document.querySelector('.app_output').value = " ";
};
