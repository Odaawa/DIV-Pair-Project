//for the number buttons
run1 = () => {document.case.display.value += "1"};
run2 = () => {document.case.display.value += "2"};
run3 = () => {document.case.display.value += "3"};
run4 = () => {document.case.display.value += "4"};
run5 = () => {document.case.display.value += "5"};
run6 = () => {document.case.display.value += "6"};
run7 = () => {document.case.display.value += "7"};
run8 = () => {document.case.display.value += "8"};
run9 = () => {document.case.display.value += "9"};
run0 = () => {document.case.display.value += "0"};

//for the operation buttons
runPlus = () => {document.case.display.value += "+"};
runMinus = () => {document.case.display.value += "-"};
runDivide = () => {document.case.display.value += "/"};
runMultiply = () => {document.case.display.value += "*"};

//other  buttons (),.
runOpenBracket = () => {document.case.display.value += "("};
runrunCloseBracket = () => {document.case.display.value += ")"};
runDot = () => {document.case.display.value += "."};
runC = () => {document.case.display.value = ""}; //clear function

function runBackspace() {
    var erase = document.getElementById("display").value;
    document.getElementById("display").value = erase.substr(0, erase.length - 1);
}
//substr(start point, number of characters to be returned) - produces a substring out of the initial string 

/*The eval() function evaluates or executes an argument.
If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.*/
function runEquals() {
	var equals = eval(document.case.display.value)
	document.case.display.value = equals;
}