

function run1(){

	document.case.display.value += "1"  //+= means append to, so that value is added on to whatever is already on display
};
function run2(){

	document.case.display.value += "2"
};
function run3(){

	document.case.display.value += "3"
};
function run4(){

	document.case.display.value += "4"
};
function run5(){

	document.case.display.value += "5"
};

function run6(){

	document.case.display.value += "6"
};

function run7(){

	document.case.display.value += "7"
};

function run8(){

	document.case.display.value += "8"
};

function run9(){

	document.case.display.value += "9"
};

function run0(){

	document.case.display.value += "0"
};

function degrees(){
    document.case.display.value =  document.case.display.value * (Math.PI/180);
};


function runC(){

	document.case.display.value = ""
};
function runDot(){

	document.case.display.value += "."
};
function runMinus(){

	document.case.display.value = "-"
};



//for the trig operations 
function runSin(){
	document.case.display.value = Math.sin(document.case.display.value);
	
}


function runCos(){
	document.case.display.value = Math.cos(document.case.display.value);
}

function runTan(){
	document.case.display.value = Math.tan(document.case.display.value);
}

function runArcSin(){
	document.case.display.value = Math.asin(document.case.display.value);
}

function runArcCos(){
	document.case.display.value = Math.acos(document.case.display.value);
}

function runArcTan(){
	document.case.display.value = Math.atan(document.case.display.value);
}

function runSinh(){
	document.case.display.value = Math.sinh(document.case.display.value);
}

function runCosh(){
	document.case.display.value = Math.cosh(document.case.display.value);
}

function runTanh(){
	document.case.display.value = Math.tanh(document.case.display.value);
}


function runBackspace() {
    var erase = document.getElementById("display").value;
    document.getElementById("display").value = erase.substr(0, erase.length - 1);
}
//substr(start point, number of characters to be returned) - produces a substring out of the initial string 


