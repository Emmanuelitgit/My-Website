const btn = document.getElementById("b-t-n");
const demo = document.getElementById("demo");
const header = document.getElementById("header");
header.style.color = "red";
btn.style.margin = "20px";
btn.style.width = "10%";
btn.style.padding = "7px";


btn.addEventListener('click',Emmanuel);
function Emmanuel(e){
e.preventDefault();
demo.innerHTML=Date();
}