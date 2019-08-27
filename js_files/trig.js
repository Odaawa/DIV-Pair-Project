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

runDot = () => {document.case.display.value += "."};
runC = () => {document.case.display.value = ""}; //clear function
runMinus = () => {document.case.display.value += "-"};
degrees = () => {document.case.display.value =  document.case.display.value * (Math.PI/180)};
runSquareRoot = () => {document.case.display.value = Math.sqrt(document.case.display.value)}

//for the trig operations 
runSin = () => {document.case.display.value = Math.sin(document.case.display.value)};
runCos = () => {document.case.display.value = Math.cos(document.case.display.value)};
runTan = () => {document.case.display.value = Math.tan(document.case.display.value)};
runArcSin = () => {document.case.display.value = Math.asin(document.case.display.value)};
runArcCos = () => {document.case.display.value = Math.acos(document.case.display.value)};
runArcTan = () => {document.case.display.value = Math.atan(document.case.display.value)};
runSinh = () => {document.case.display.value = Math.sinh(document.case.display.value)};
runCosh = () => {document.case.display.value = Math.cosh(document.case.display.value)};
runTanh = () => {document.case.display.value = Math.tanh(document.case.display.value)};
	

function runBackspace() {
    var erase = document.getElementById("display").value;
    document.getElementById("display").value = erase.substr(0, erase.length - 1);
}
//substr(start point, number of characters to be returned) - produces a substring out of the initial string 


