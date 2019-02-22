window.onload = function() {

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
	
	let allLinks = document.getElementsByTagName("a");
		for (var x = 0; x<allLinks.length; x++) {	
			 if(allLinks[x].className!='offline'){
				allLinks[x].style.color = 'white';
			}
		}

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

	$('a').click(function( event ) {
		if(!($(this).hasClass('online'))){
			event.preventDefault();
		}	
	});	

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




