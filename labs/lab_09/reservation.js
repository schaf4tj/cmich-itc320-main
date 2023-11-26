"use strict";

$(document).ready(() => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    const validateForm = () => {
        const arrivalDateInput = $("#arrival_date");
        const nightsInput = $("#nights");
        const nameInput = $("#name");
        const phoneInput = $("#phone");
		const emailInput = $("#email");


        // Reset error messages
        arrivalDateInput.next().text("");
        nightsInput.next().text("");
        nameInput.next().text("");
		phoneInput.next().text("");
        emailInput.next().text("");

        let isValid = true;

        // Validate arrival date
        if (arrivalDateInput.val().trim() === "") {
            arrivalDateInput.next().text("Arrival date is required.");
            isValid = false;
        }

        // Validate nights
        const nightsValue = nightsInput.val().trim();
        if (nightsValue === "" || isNaN(Number(nightsValue))) {
            nightsInput.next().text("Please enter a valid number of nights.");
            isValid = false;
        }

        // Validate name
        if (nameInput.val().trim() === "") {
            nameInput.next().text("Name is required.");
            isValid = false;
        }

        // Validate email
        const emailValue = emailInput.val().trim();
        if (emailValue === "" || !emailPattern.test(emailValue)) {
            emailInput.next().text("Please enter a valid email address.");
            isValid = false;
        }

		// Validate phone number (assuming a simple format like 999-999-9999)
        const phoneValue = phoneInput.val().trim();
        if (phoneValue === "" || !/^\d{3}-\d{3}-\d{4}$/.test(phoneValue)) {
            phoneInput.next().text("Please enter a valid phone number (e.g., 999-999-9999).");
            isValid = false;
        }

        // If all entries are valid, submit the form
        if (isValid) {
            $("form").submit();
        }
    };

    const resetForm = () => {
        $("form")[0].reset();
        $("#arrival_date").next().text("");
        $("#nights").next().text("");
        $("#name").next().text("");
        $("#email").next().text("");
		$("#phone").next().text("");
        $("#arrival_date").focus();
    };

    $("#display_results").click(() => {
        // Logic to display results (not provided in the prompt)
    });

    $("#display_scores").click(() => {
        // Logic to display scores (not provided in the prompt)
    });

    $("#add").click(() => {
        // Logic to add scores (not provided in the prompt)
    });

    $("#reservation_form").submit((event) => {
		console.log("Form submission triggered");
        event.preventDefault(); // Prevent the default form submission
        validateForm(); // Validate the form entries
    });

    $("#reset_form").click(() => {
        resetForm(); // Reset the form
    });

    $("#arrival_date").focus(); // Set initial focus on arrival date
});