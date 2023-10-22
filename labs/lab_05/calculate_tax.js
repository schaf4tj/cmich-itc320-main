"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});

	function processEntry() {
		// textbox values
		const income = parseInt($("#income").value);
		const tax_html = $("#tax");
		// validation
		if (isNaN(income) || income <= 0) {
			// error msg and set focus
			alert("Invalid input. Enter a # > 0.");
			$("#income").focus();
		}
		
		else {
			// calculation
			const tax = calculateTax(income);
			// display result
			tax_html.value = tax.toFixed(2);
		}
		// set focus
		$("#income").focus();
	}

	function calculateTax(income) {
		// if statements for calculations of tax brackets
		if(income > 0 && income <= 9875) {
			income = 0 + (income * .10);
		}
		else if(income > 9875 && income <= 40125) {
			income = 987.50 + ((income - 9875) * .12);
		}
		else if(income > 40125 && income <= 85525) {
			income = 4617.5 + ((income - 40125) * .22);
		}
		else if(income > 85525 && income <= 163300) {
			income = 14605.5 + ((income - 85525) * .24);
		}
		else if(income > 163300 && income <= 207350) {
			income = 33271.5 + ((income - 163300) * .32);
		}
		else if(income > 207350 && income <= 518400) {
			income = 47367.59 + ((income - 207350) * .35);
		}
		else if(income > 518500) {
			income = 156325 + ((income - 518500) * .37);
		}
		// return income 
		return income;
	}

