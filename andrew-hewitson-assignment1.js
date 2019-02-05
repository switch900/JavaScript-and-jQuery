//part 1
//Wrap your entire script in a function assigned to the window.onload event

window.onload = function() {
	
//part 2	
//Begin by looking at the page in a browser, with your window open at least 800px wide. 
//You should see at the top-left of the page the title ‘COMP 2015 Assignment 1’,
//and at the top-right a link that says ‘Add User’.  
//•In your solution, get the menu icon link element using the id addUser and attach an onclick event to it. 
//•The onclick event should call an anonymous function that prompts the user for a name and stores the result
// 	in a variable. 
//•Next, use an if statement to check if the name variable is empty
// 	(i.e. we are not allowing new users with an empty name), call addUserFunction()
// 	(provided for you in assignment1-library.js) and pass your variable as a parameter.
// 	The addUserFunction will then update the list of users for you. 

	var userName;
	let button = document.getElementById('addUser');
	
	button.onclick = function(){
		userName = window.prompt("Please enter new user");
		if(userName!="" && userName!=null){
			addUserFunction(userName);	
		}
		else{
			window.alert("Name field must not be empty.");
		}
	}
	
//part 3
//Use JavaScript to change the color of all links on the page to white,
//unless they contain the class offline
	
	let allLinks = document.getElementsByTagName("a");
		for (var x = 0; x<allLinks.length; x++) {	
			 if(allLinks[x].className!='offline'){
				allLinks[x].style.color = 'white';
			}
		}

//part 4
//Use jQuery to temporarily change the color of all links on the page to dark blue
//when they are hovered over, unless they contain the class offline. That is, each
//link should be dark blue when the mouse is over it, and white when the mouse is off
//(and each link must animate separately!)

	for (let y = 0; y<allLinks.length; y++){
		$(allLinks[y]).on( "mouseenter", function() {
			if(allLinks[y].className!='offline'){
				$( this ).css( "color", "navy" );
			}
		});
		$(allLinks[y]).on( "mouseleave", function() {
			if(allLinks[y].className!='offline'){
				$( this ).css( "color", "white" );
			}
		});
	}

//part 5
//Use jQuery to disable all links (using event.preventDefault()) that contain the class offline

$('a').click(function( event ) {
	if(!($(this).hasClass('online'))){
		event.preventDefault();
	}	
});

//part 6
//Take your browser window and resize it so that it is less than 800px wide.
//You should see the top menu change – the title has now been replaced by a house icon
//and there is a menu icon (three horizontal stripes referred to as a ‘hamburger’)on the top-right.
//•Get the div with class header-nav
//•In your solution, get the menu icon element (i.e. the <img> that has src=“menu.svg”) 
//	using .querySelector()and attach an onclick event to it.
//•The onclick event should call an anonymous function that does the following:
//•If the list of classes on the .header-nav element contains hide, remove class hide and add class show.
//	Likewise, if the element contains the class show, remove class show and add class hide.
//	This will show and hide the mobile menu.
//•If the list of classes on the .header-nav element contains hide, change the src attribute
//	of the menu icon to ‘x.svg’. Likewise, if the element contains the class show, change
//	the src attribute of the menu icon to ‘menu.svg’.  This will change the icon to an appropriate
//	image based on whether the mobile menu is open or closed

window.onresize = function(){
	let headerNav = document.getElementsByClassName('header-nav')[0];
	let icon = document.querySelector('.toggle img');
	let show = headerNav.classList.add('show');
	
	
	icon.onclick = function(){
		if(headerNav.classList.contains('hide')){
			headerNav.classList.remove('hide');
			headerNav.classList.add('show');
			icon.src = 'x.svg'
			}
			else{
			headerNav.classList.remove('show');
			headerNav.classList.add('hide');
			icon.src = 'menu.svg';
			}
		}
	}
}




