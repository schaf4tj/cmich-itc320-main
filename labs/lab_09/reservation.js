"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		
	// Move focus to the "Arrival date" text box
		const arrivalDateInput = $("#arrivalDate");
		arrivalDateInput.focus();

	// Event handler for form submission
	$("#reservationForm").submit(function (event) {
		console.log("Form submitted");

		// Validate user entries
		const nameInput = $("#name");
		const emailInput = $("#email");
		const nightsInput = $("#nights");

		// Trim and put back entries into the controls
		nameInput.val(nameInput.val().trim());
		emailInput.val(emailInput.val().trim());
		nightsInput.val(nightsInput.val().trim());

		// Check if any of the entries are invalid
        if (!isValidInput(nameInput) || !isValidInput(emailInput) || !isValidNumericInput(nightsInput)) {
            // Display an alert or handle invalid entries as needed
			console.log("Invalid entries. Form will not submit.");
            alert("Please fill in all fields with valid information.");

            // Prevent the form from submitting
            event.preventDefault();
            return false; // Make sure to return false to cancel the submission
        }
		console.log("Form submission allowed.");
		return true; // Allow the form to submit
    });

    // Function to check if a value is non-empty
    function isValidInput(input) {
        return input.val().trim() !== "";
    }

    // Function to check if a value is numeric
    function isValidNumericInput(input) {
        const value = input.val().trim();
        return isNumeric(value);
    }

    // Function to check if a value is numeric
    function isNumeric(value) {
        return !isNaN(value) && isFinite(value);
    }
}); // end ready