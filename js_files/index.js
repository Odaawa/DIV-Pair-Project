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
function runPlus(){

	document.case.display.value += "+"
};
function runMinus(){

	document.case.display.value += "-"
};
function runDivide(){

	document.case.display.value += "/"
};
function runMultiply(){

	document.case.display.value += "*"
};

function runC(){

	document.case.display.value = ""
};
function runDot(){

	document.case.display.value += "."
};

function runOpenBracket(){

	document.case.display.value += "("
};

function runCloseBracket(){
	document.case.display.value += ")"
};

/*The eval() function evaluates or executes an argument.
If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.*/
function runEquals() {
	var equals = eval(document.case.display.value)
	document.case.display.value = equals;
}



function runBackspace() {
    var erase = document.getElementById("display").value;
    document.getElementById("display").value = erase.substr(0, erase.length - 1);
}
//substr(start point, number of characters to be returned) - produces a substring out of the initial string 


