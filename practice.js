
const person = {
	firstName:'Emmanuel',
	lastName:'Yidana',
	age:30,
	hobbies:['music', 'movies','sports'],
	address:{
		street:'50 main st',
		city:['Accra','Legon','Cape coast'],
		state:'Ghana'
	}
 }

 const {firstName,lastName,address:{city,state,street}}=person;


 person.push='eyidana@001.st.edu.ug.gh';

 console.log(Array.isArray(person.hobbies));


 //constructot function
 function person(firstName,lastName,dob){
	this.firstName=firstName;
	this.lastName=lastName;
	this.dob= new Date(dob);
	this.getFullName=function(){
		return `${this.firstName} ${this.lastName}`
	}
}

//instanitiate object

const person1 = new person('Yidana', 'Emmanuel', '9-1-2000');
console.log(person1.getFullName())


const form = document.querySelector('.form')
const emailInput = document.querySelector('#email')
const nameInput = document.querySelector('#name')
const formgroup = document.querySelector('#formgroup')
const msg = document.querySelector('.msg')
const btn = document.querySelector('.btn')

btn.style.background='red'
btn.style.color='white'
form.addEventListener('click' , Emmanuel);

function Emmanuel(e) {
	e.preventDefault();

	if(nameInput.value === "" || emailInput.value === "") {
		msg.innerHTML = 'Please fill all the fields'
	}

	else {
		console.log('successfully')
	}
}
