	const p = document.getElementById('principal').value;
  const t = document.getElementById('time').value;
  const r = document.getElementById('rate').value;
    //n = compounding periods
    const n = document.getElementById('compound').value;
    let totalAmount = document.getElementById('displayAmount').value;
    let interest =document.getElementById('displayInterest').value;

// calculate compound interest
const compound = function(p, t, r, n){
	const result = 1 + (r/n);
	const answer = Math.pow(result, t*n);
	const amount = p * answer;
	totalAmount = amount;
	interest = amount - p;
}


// calculate simple interest
const simpleInterest = function(p, t, r){
   const  s_interest = p*t*r;
   const amount = p + simpleInterest;
}

//clear input areas
function clear_display(){
  document.getElementById('principal').value = "";
  document.getElementById('time').value = "";
  document.getElementById('rate').value = "";
  document.getElementById('compound').value = "";
  totalAmount = "";
  interest = "";
}