/*Andrew Hewitson
  A01029917
  COMP 2015 Lab 1
  January 8, 2019  
*/

//part 1
window.onload = function() {	
//part 2			
	let firstName = window.prompt('Please enter your First Name');
	let lastName = window.prompt('Please enter your Last Name');
	let fullName = firstName + ' ' + lastName;
	console.log(fullName);
	
//part 3
/*
clientWidth - inner width (the space inside an element including padding but excluding borders and scrollbars)
offsetWidth -  outer width (the space occupied by the element, including padding and borders)
*/

/*
width - number
style.width - string
*/

//part 4
document.getElementById('img2').width = document.getElementById('img1').clientWidth;
	document.getElementById('img3').width = document.getElementById('img1').clientWidth;	
}