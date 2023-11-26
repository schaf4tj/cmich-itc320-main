"use strict";

$(document).ready( () => {
	// display data from session storage
	const email = sessionStorage.getItem("email") || "N/A";
    const phone = sessionStorage.getItem("phone") || "N/A";
    const zip = sessionStorage.getItem("zip") || "N/A";
    const dob = sessionStorage.getItem("dob") || "N/A";

    $("#email").text(email);
    $("#phone").text(phone);
    $("#zip").text(zip);
    $("#dob").text(dob);

	$("back").click( () => {
		
		history.back();
	}); // end of click()
	
}); // end of ready()