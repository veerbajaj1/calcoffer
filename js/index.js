
function Offer() 
{
p1 = document.getElementById("first").value; 
p2 = document.getElementById("second").value; 
A = document.getElementById("third").value;
document.getElementById("result").innerHTML = (100 - (Number(A)*100/ (Number(p1) + Number(p2)))).toFixed(2); 
}

function formReset() {
  location.reload()
}