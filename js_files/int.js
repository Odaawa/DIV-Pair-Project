	var p = document.getElementById('principal').value;
  var t = document.getElementById('time').value;
  var rate = document.getElementById('rate').value;
  var r = rate/100;
    //n = compounding periods
    // var compoundingRate = document.getElementById('compound_options').value;//find out how best to do this
    // var n = compoundingRate.options[compoundingRate.selectedIndex].value;//accessing value from select menu
   let totalAmount = document.getElementById('displayAmount');
   let interest =document.getElementById('displayInterest');

//swap between simple interest and compound interest 
function swap(){
  let option_1 = document.getElementById('compound');
  let option_2 = document.getElementById('simple');
  let button = document.getElementById('get_results');

  option_1.addEventListener('click', () => {
      document.getElementById('compound_options').style.opacity = 1;
      document.getElementById('optionLabel_2').style.opacity = 1;
      button.onclick = compound(); 
  });
  
  option_2.addEventListener('click', () => {
      document.getElementById('compound_options').style.opacity = 0;
      document.getElementById('optionLabel_2').style.opacity = 0;
      button.onclick =simpleInterest();
  });
}
swap();

// calculate compound interest
const compound = function(){
  const sum = (r/n) + 1;
  const exponent = t*n;
  const sum_exponent = Math.pow(sum, exponent);
  const amount = p * sum_exponent;
  totalAmount.value = amount.toFixed(2);
  const compoundInterest = amount - p;
  interest.value = compoundInterest.toFixed(2);
}

//calculate simple interest
const simpleInterest = function(){
   const  s_interest = p*t*r;
   const amount = p * (1 + (t*r));
   document.getElementById('displayAmount').value = amount;//.toFixed(2);
   document.getElementById('displayInterest').value = s_interest;//.toFixed(2);
}

//clear input areas
function clear_display(){
  document.getElementById('principal').value = "";
  document.getElementById('time').value = "";
  document.getElementById('rate').value = "";
  document.getElementById('compound').value = "";
  totalAmount.value = "";
  interest.value = "";
}



