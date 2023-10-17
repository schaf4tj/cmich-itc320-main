"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

	function processEntry() {
		const entryElement = $("#entry");
		const resultElement = $("#result");
		const entryValue = parseFloat(entryElement.value);
	
		entryElement.focus();
	
		if (isNaN(entryValue) || entryValue <= 0) {
			resultElement.value = "Invalid input. Enter a # < 0.";
		} else {
			const taxAmount = calculateTax(entryValue);
			resultElement.value = "Tax Amount: $" + taxAmount.toFixed(2);
		}
	}

	function calculateTax(income) {
		income = Math.floor(income);

		const brackets = [9875, 40125, 85525, 163300, 207350, 518400];
		const rates = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];

		let taxAmount = 0;
		let remainingIncome = income;

		for (let i = 0; i < brackets.length; i++) {
			if(remainingIncome <= 0) {
				break;
			}

			const taxableIncome = Math.min(remainingIncome, brackets[i]);
			taxAmount += taxableIncome * rates[i];
			remainingIncome -= taxableIncome;
		}

		taxAmount = Math.round(taxAmount * 100) / 100;

		return taxAmount;
	}
});
