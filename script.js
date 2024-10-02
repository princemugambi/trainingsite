$(document).ready(function(){
	let offset = {offset: "80%"}
	$(".talent-title").waypoint(function(){
		$(".talent-title").addClass("animate__animated animate__fadeInLeft");
	}, offset);


		$(".query1").waypoint(function(){
		$(".query1").addClass("animate__animated animate__fadeInRight");
	}, offset);


			$(".query2").waypoint(function(){
		$(".query2").addClass("animate__animated animate__fadeInLeft");
	}, offset);


					$(".service-title").waypoint(function(){
		$(".service-title").addClass("animate__animated animate__fadeInDown");
	}, offset);



						$(".nav-anim").waypoint(function(){
		$(".nav-anim").addClass("animate__animated animate__fadeInUp");
	}, offset);

      
          					$(".card-anim").waypoint(function(){
		$(".card-anim").addClass("animate__animated animate__fadeInUp");
	}, offset);


          	      					$("#ccna-el1").waypoint(function(){
		$("#ccna-el1").addClass("animate__animated animate__fadeInUp");
	}, offset);	


		       	      					$("#ccna-el2").waypoint(function(){
		$("#ccna-el2").addClass("animate__animated animate__fadeInUp");
	}, offset);


		       	      					$("#form").waypoint(function(){
		$("#form").addClass("animate__animated animate__fadeInUp");
	}, offset);		


});





/*button onclick-----------------------------*/

let instructorEl = document.getElementById('instructor-el');

let instructorEl2 = document.getElementById('instructor-el2');


function showInfo(){
	instructorEl.innerHTML = "Oops!, this page is currently unavailable!";
	setTimeout(function(){instructorEl.innerHTML = ""},4000);
}



function showMoreInfo(){
	instructorEl2.innerHTML = "Oops!, this page is currently unavailable!";
	setTimeout(function(){instructorEl2.innerHTML = ""},4000);
}