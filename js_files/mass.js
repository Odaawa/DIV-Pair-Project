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
		//for mass conversions
		case 'kg-p':
			convert_kgp();
		break;
		case 'p-kg':
			convert_pkg();
		break;
	}
}


//mass conversion functions
function convert_kgp(){//kg to pounds
   const mass = user_input.value*2.20462;
   output.value = mass.toFixed(3);
}
function convert_pkg(){//pounds to kg
	const mass = user_input.value*0.453592;
	output.value = mass.toFixed(3);
}

//clear display function- not working, check it out later
function clear_display(){
	document.querySelector('.user_input').value = " ";
	document.querySelector('.app_output').value = " ";
};
