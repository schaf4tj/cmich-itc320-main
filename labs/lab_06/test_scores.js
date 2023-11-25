"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});

function addScore() {
	//random #
	//const randomScore = Math.floor(Math.random() * 100) + 1;
	//scores.push(randomScore);
	//alert(`Score ${randomScore} added.`);
	const scores = [];

	let addscore = 0;
	do {
		score = parseInt (
			prompt("Enter a test score, or enter -1 to end scores", -1));
		
		if (scores >= 0 && score <= 100) {
			scores[scores.length] = score;
		}
		else if (score != -1) {
			alert ("score must be a valid # from 0 throguh 100");
		}
	}
	while(scores != -1);

	if (scores.length > 0) {
		let total = 0;
		for(let i in scores) {
			total = total + scores[i];
			document.write('<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>');
		}

	}
  }

  function displayResults() {
	const totalScore = scores.reduce((acc, score) => acc + score, 0);
	const averageScore = totalScore / (scores.length - 1); // Exclude the -1 from the count

	const resultsContainer = $("#resultsContainer");
	resultsContainer.innerHTML = `<p>Total Score: ${totalScore}</p><p>Average Score: ${averageScore.toFixed(2)}</p>`;
  }

  function displayScores() {
	const scoresContainer = $("#scoresContainer");
	scoresContainer.innerHTML = "<p>Scores:</p>";

	for (let i = 0; i < scores.length - 1; i++) {
	  scoresContainer.innerHTML += `<p>Score ${i + 1}: ${scores[i]}</p>`;
	}
  }