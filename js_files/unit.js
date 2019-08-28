//link selects



//user selection of unit conversion option from left aside
var listItems = document.querySelectorAll('#left-list li');
for(i = 0; i < listItems.length; i++){
  	listItems[i].addEventListener('click', current_unit);
}

//accessing each of the unit conversion divs
var unit_div = document.querySelectorAll('#main_content div');

var remove_class = function(){
	for(i = 0; i < unit_div.length ; i++){
		// if(unit_div[i].classList === 'active'){
	 		unit_div[i].classList.remove('active');//removes current class from all other elements in the list
	 		unit_div[i].classList.add('container');
	 	// }
	} 	
}


//adds current class to selected unit option, sets all other unit div converter class to container, gives corresponding div active class
function current_unit(){
	for(i = 0; i < this.parentNode.children.length; i++){
	 		this.parentNode.children[i].classList.remove('current');//removes current class from all other elements in the list
	} 	
	this.classList.add('current');
	remove_class();
	if (this === listItems[0]){
		unit_div[0].classList.remove('container');
		unit_div[0].classList.add('active');
	}else if (this === listItems[1]){
		unit_div[1].classList.remove('container');
	 	unit_div[1].classList.add('active');
	}else if (this === listItems[2]){
		unit_div[2].classList.remove('container');
		unit_div[2].classList.add('active');
	}else if (this === listItems[3]){
		unit_div[3].classList.remove('container');
	 	unit_div[3].classList.add('active');
	}else if (this === listItems[4]){
		unit_div[4].classList.remove('container');
		unit_div[4].classList.add('active');
	}else if (this === listItems[5]){
		unit_div[5].classList.remove('container');
		unit_div[5].classList.add('active');
	}
	// for(count = 0; count < unit_div.length; count++){
}

const choose = document.querySelectorAll('.choose');
for(i = 0; i < choose.length; i++){
  	choose[i].addEventListener('change', get_option);
}
var get_option = function(){
  	for( var a = 0; a< choose.length; a++){
   		if (choose[a].parentNode.classList === 'active'){
   			var choice = choose[a].value;
   		}
	}
	console.log(choice);
}

//returns user's selected option when user selects new option from the active div

// function get_option(){
// 	return choose.value;
// }
 var option = get_option();


const user_input = document.querySelector('.active .user_input');
const output = document.querySelector('.active .app_output');
// const button = document.

function convert(){
	switch(option){
		//for area conversions
		case 'sq_m':
			convert_sqm();
		break;
		case 'sq_ft':
			convert_sqft();
		break;
		//for distance conversions
		case 'm-y':
			convert_meters();
		break;
		case 'y-m':
			convert_yards();
		break;
		//for mass conversions
		case 'kg-p':
			convert_kgp();
		break;
		case 'p-kg':
			convert_pkg();
		break;
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
		//volume conversions
		case 'l-g':
           	convert_lg();
		break;
		case 'g-l':
           	convert_gl();
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
//distance conversion functions
function convert_meters(){//meters to yards
   const distance = user_input.value*1.09361;
   output.value = distance.toFixed(3);
}
function convert_yards(){//yards to meters
	const mass = user_input.value*0.9144;
	output.value = mass.toFixed(3);
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
//time conversion functions
function convert_sechr(){//seconds to hours
   const time = user_input.value/3600;
   output.value = time.toFixed(1);
}
function convert_secday(){//seconds to days
   const time = user_input.value/86400;
   output.value = time.toFixed(1);
}
function convert_hrsec(){//hours to seconds  
   const time = user_input.value * 3600;
   output.value = time.toFixed(2);
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