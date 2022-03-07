const btn = document.querySelector('.btn')
const emailInput = document.querySelector('#email')
const msg= document.querySelector('.msg')
btn.addEventListener('click', Emmanuel);

function Emmanuel(e){
	e.preventDefault();
	if(emailInput.value == ''){
		msg.innerHTML='please fill all the fields'
	}

	else{
		console.log('submitted succssful')
	}
	
}



 