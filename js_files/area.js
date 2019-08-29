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
		//for area conversions
		case 'sq_m':
			convert_sqm();
		break;
		case 'sq_ft':
			convert_sqft();
		break;
	}
}


//for area
function convert_sqm(){//square miles to square feet
   const area = user_input.value*10.7639;
   output.value = area.toFixed(3);
}
function convert_sqft(){//square feet to square miles
	const area = user_input.value*0.092903;
	output.value = area.toFixed(3);
}

//clear display function- not working, check it out later
function clear_display(){
	document.querySelector('.user_input').value = " ";
	document.querySelector('.app_output').value = " ";
};
