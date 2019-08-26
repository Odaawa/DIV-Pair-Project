	var p = document.getElementById('principal').value;
  var t = document.getElementById('time').value;
  var rate = document.getElementById('rate').value;
  var r = rate/100;

  let totalAmount = document.getElementById('displayAmount');
  let interest =document.getElementById('displayInterest');

//swap between simple interest and compound interest
// function answer(){
//   if(document.querySelector('#interest_options').value === 'compoundInterest'){
//     compound();
//   }else if(document.querySelector('#interest_options').value === 'simpleInterest'){
//     simple();
//   }
// }//check this out, sth's not working right, remember you called answer() in html so check that too

// function swap(){
//   let option_1 = document.getElementById('compound');
//   let option_2 = document.getElementById('simple');
//   let button = document.getElementById('get_results');

//   option_1.addEventListener('click', () => {
//       document.getElementById('compound_options').style.opacity = 1;
//       document.getElementById('optionLabel_2').style.opacity = 1;
//       button.onclick = compound(); 
//   });
  
//   option_2.addEventListener('click', () => {
//       document.getElementById('compound_options').style.opacity = 0;
//       document.getElementById('optionLabel_2').style.opacity = 0;
//       button.onclick =simpleInterest();
//   });
// }
// swap();


//for the compounding options selector
const select_compound = document.querySelector('#compound_options');
select_compound.addEventListener('change', get_n);//whenever we change the select option the value of n changes
function get_n(){
  return select_compound.value;
};

// calculate compound interest
const compound = function(){
   const n = get_n();
  const sum = (r/n) + 1;
  const exponent = t*n;
  const sum_exponent = Math.pow(sum, exponent);
  const amount = p * sum_exponent;
  totalAmount.value = amount.toFixed(2);
  const compoundInterest = amount - p;
  interest.value = compoundInterest.toFixed(2);
}

//calculate simple interest
const simple = function(){
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



