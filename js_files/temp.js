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
		//for temperature conversions
		case 'tempk-c':
			convert_tempKC();
		break;
		case 'tempc-k':
			convert_tempCK();
		break;
		case 'tempf-k':
			convert_tempFK();
		break;
		case 'tempf-k':
			convert_tempKF();
		break;
	}
}


//temperature conversion functions
function convert_tempKC(){//K to C
   const temp = user_input.value - 273.15;
   output.value = temp.toFixed(2);
}
function convert_tempFK(){//F to K
   const temp = (user_input.value-32)* 5/9 + 273.15;
   output.value = temp.toFixed(2);
}
function convert_tempCK(){//C to K
   const temp = user_input.value + 273.15;
   output.value = temp.toFixed(2);
}
function convert_tempKF(){//F to K
   const temp = (user_input.value -273.15) * 9/5 +32;
   output.value = temp.toFixed(2);
}

//clear display function- not working, check it out later
function clear_display(){
	document.querySelector('.user_input').value = " ";
	document.querySelector('.app_output').value = " ";
};
