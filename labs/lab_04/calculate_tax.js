"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
	$("#clear").addEventListener("click", clearFields);
	// set focus
	$("#itemPrice").focus();

	// event handlers
	$("#itemPrice").addEventListener("click", clearTextBox);
	$("#taxRate").addEventListener("click", clearTextBox);

	function processEntry() {
		// get user inputs
		const itemPrice = parseFloat($("#itemPrice").value);
		const taxRate = parseFloat($("#taxRate").value);
		const salesTaxResult = $("#salesTaxResult");
		const totalResult = $("#TotalResult");
	
		// data validation
		if(isNaN(itemPrice) || itemPrice <= 0 || itemPrice >= 10000) {
			alert("Invalid input. Enter a valid # less than 10,000.");
			// set focus
			$("#itemPrice").focus();
			return;
		}
		 if(isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
			alert("Invalid input. Enter a valid # less than 12.");
			// set focus
			$("#taxRate").focus();
			return;
		}
	
		// calculate
		const salesTax = itemPrice * (taxRate / 100);
		const total = itemPrice + salesTax;
	
		// display results
		salesTaxResult.value = salesTax.toFixed(2);
		totalResult.value = total.toFixed(2);
	
		// set focus
		clearFields();
	}
	
	function clearFields() {
		// clear boxes
		clearTextBox($("#itemPrice"));
		clearTextBox($("#taxRate"));
		$("#salesTaxResult").value = "";
		$("#totalResult").value = "";
	
		// set focus
		$("#itemPrice").focus();
	}
	
	function clearTextBox(textBox) {
		textBox.value = "";
	}
});
