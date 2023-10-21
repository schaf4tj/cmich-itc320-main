"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
	$("#clear").addEventListener("click", clearButton);
	$("#subtotal").addEventListener("click", clearSubtotal);
	$("#tax").addEventListener("click", clearTax);

});

	// set focus
	$("#subtotal").focus();
	
	function processEntry() {
		// get user inputs
		const subtotal = parseFloat(document.querySelector("#subtotal").value);
		const tax = parseFloat(document.querySelector("#tax").value);
		const sales_tax_html = $("#sales_tax");
		const total_html = $("#total");
	
		// set focus back 
		$("#subtotal").focus();

		// data validation
		if(isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
			alert("Invalid input. Input must be > 0 & < 10000");
			// set focus
			$("#subtotal").focus();
			return;
		}

		// data validation
		 if(isNaN(tax) || tax <= 0 || tax >= 12) {
			alert("Invalid input. Input must be > 0 & < 12");
			// set focus
			$("#tax").focus();
			return;
		}
	
		// calculate
		const salesTax = subtotal * (tax / 100);
		const total = subtotal + salesTax;
	
		// display results
		sales_tax_html.value = salesTax.toFixed(2);
		total_html.value = total.toFixed(2);

	}
	
	// clears the field of a textbox
	function clearTextBox(textBox) {
		textBox.value = "";
	}
	
	// clears subtotal
	function clearSubtotal() {
		clearTextBox($("#subtotal"));
	}

	// clears tax
	function clearTax() {
		clearTextBox($("#tax"));
	}

	// clears on click of button
	function clearButton() {
		clearTextBox($("#subtotal"));
		clearTextBox($("#tax"));
		$("#sales_tax").value = "";
		$("#total").value = "";

		// set focus
		$("#subtotal").focus();
	}

