'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('#testjs').text("Javascript is connected");
		$('.jumbotron h1').text("Getting Nasty!");
		$('.jumbotron p').toggleClass("active");
		$('.jumbotron h1').addClass("active");
	});

	$("#submitBtn").click(updateProject);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	$("#testjs").click(function(e) {
		$('.jumbotron p').text("Saleh Kaddoura has arrived Bitches!");
	});

	$("a.thumbnail").click(projectClick);

	
}

function projectClick(e) {
		console.log("project clicked");
		e.preventDefault();

		//In an event handler, $(this) refers to the object that triggered the event
		//This block of code will find the <p> tag in the element and store it in the variable projectTitle
		//and change the text of jumbotron h1 to whatever is stored in projectTitle
		var projectTitle = $(this).find("p").text();
		var jumbotronHeader = $(".jumbotron h1");
			jumbotronHeader.text(projectTitle);

		//This block of code will append 'Description of the project' to each project
		var containingProject = $(this).closest(".project");
		var description = $(containingProject).find(".project-description");

		if (description.length == 0) {
			containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
		} else {
			//description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
			$(".project-description").fadeOut();
		}
	}

function updateProject(e) {
	var projectID = $('#project').val();
	$(projectID).animate({
		width: $('#width').val()
	});

	var newText = $('#description').val();
	$(projectID + ".project p").text(newText);
}

/*The Koan of Web Debugging
	To be an engineer you must be a scientist
	Start with the simplest test case you can find
	Run experiments: find two conditions that vary in ionly way,
	and which have two different outcomes */