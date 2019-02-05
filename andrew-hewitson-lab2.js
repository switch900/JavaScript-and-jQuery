/*Andrew Hewitson
  A01029917
  COMP 2015 Lab 2
  January 14, 2019  
*/

window.onload = function() {

/*Part 1 - Alert the current time, formatted as hours:minutes, when the page loads. 
Examples would look like 12:35, 9:10, 1:45*/
let date =  new Date();
let hours = date.getHours()%12;
let minutes = date.getMinutes();
minutes = (minutes<10)?"0"+minutes:minutes;
let amPM = (hours<12)?"PM":"AM";
window.alert(`${'The Time Is'} ${hours}:${minutes} ${amPM}`);

/*Part 2 - Create an array and fill it with at least six usernames 
(i.e. “Sophia”, “Gabriel”, ...) then loopthrough them with a for loop. 
If a username contains the letter “i” then alert the username.	
*/
let names = ['chris','bethany','jason','bob', 'timmy', 'dave'];
for(let name of names){
	//if(name.indexOf('i') > -1)
	if(name.includes('i')){
		window.alert("The letter i was found inside " + name);
	}
}

/*part 3 - Use DOM 0 ( e.g. document.images ) to change the CSS style of
 the links so that every link has its default underline removed (use the
 CSS text-decoration property for this).
*/
let allLinks = document.links;
for (var x = 0; x<allLinks.length; x++) {			
	allLinks[x].style.textDecoration = 'none';
}

/*part 4 - Use DOM 1 ( e.g. document.getElementsByTagName(‘img’) ) to: 
– Add class ‘message’ to every div on the page. 
– Change the width of every div to 100px 
– Change the height of every div to 100px 
– Inside the for loop, use the code below to generate three random values
var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
then, combine the variables into a string literal (as shown below) and 
set the CSS  background color of a div to this value. 
Each of the six divs should then have its own distinct color. 
`rgb(${r}, ${g}, ${b})`
*/
let div = document.getElementsByTagName("div");
for(let y = 0; y<div.length; y++){
	div[y].className = "message";
	div[y].style.width = "100px";
	div[y].style.height = "100px";	
	let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
	div[y].style.backgroundColor = `rgb(${r},${g},${b})`;
	}
}