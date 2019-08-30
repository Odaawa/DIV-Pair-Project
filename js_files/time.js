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
		//for time conversions
		case 'sec-hr':
           	convert_sechr();
		break;
		case 'sec-day':
           	convert_secday();
		break;
		case 'hr-sec':
           	convert_hrsec();
		break;
	}
}


//time conversion functions
function convert_sechr(){//seconds to hours
   const time = user_input.value/3600;
   output.value = time.toFixed(3);
}
function convert_secday(){//seconds to days
   const time = user_input.value/86400;
   output.value = time.toFixed(3);
}
function convert_hrsec(){//hours to seconds  
   const time = user_input.value * 3600;
   output.value = time.toFixed(3);
}

//clear display function- not working, check it out later
function clear_display(){
	document.querySelector('.user_input').value = " ";
	document.querySelector('.app_output').value = " ";
};
