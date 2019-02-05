//part 1
//Wrap your script in window.onload = function() {}
	window.onload = function() {

//part 2
//The page contains four divs with class slide, each of which has an empty image tag inside of it.
// Loop through the divs and assign a src to each, i.e. the first slide will have src ‘img0,jpg’,
// the second will have src ‘img1.jpg’, and so forth.
	
	let images = document.querySelectorAll('.slide img');//returns an array of all matching elements
	
	for (let i =0; i<images.length; i++){
		images[i].src = 'dog' + i + '.jpg';
		}
	
//part 3
//First, create a timer variable that is initially set to null and a variable named position
// that is initially set to zero.Next, attach an onclick event to the button that calls a function named run.
// Inside of run(), start and stop the animation based on the state of your timer variable.
// If the timer variable is null, start the animation using setInterval(), which should call a function
// named startSlideShow every 4 seconds. e.g. setInterval(startSlideShow, 4000);
//If the timer variable is not null, end the animation and set your timer variable back to null

	let button = document.getElementById('control');
	let container = document.getElementsByClassName('slide-container')[0];
	container.style.left = '0px';
	let position = 0;
	
	button.onclick = run;
	let timer = null;
	
	//start and stop animation
	function run(){
		if(timer===null){
		timer = setInterval(startSlideShow,4000);		
		}
		else{
		clearInterval(timer);
		timer =  null;
		}
	}
	
//part 4
//Inside of your startSlideShow() function, check the value of the position variable.
// If it is greater than -1800, reduce the value of position by 600. If it is not greater than -1800,
// set the value of position back to zero.After you have done the above calculations and assignments
// (and while you are still inside the startSlideShow function),
// set the style.left property of the .slide-container element to the value of position.
// Changing the style.left property of the .slide-container div is what will cause the images
// to appear to slide in and out of the frame.

	function startSlideShow(){
		if(position > -1800 ){
			position-=600;		
		}
		else{
			position=0;
		}		
	container.style.left = position + 'px';
	}	
}
