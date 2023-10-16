//strict mode
"use strict";

//predefine vars
let grade = 0;

let html = "letter_grade.html";

//user input / adding a way to stop 
do {
    grade =  parseInt(prompt("Enter # grade between 0 to 100 \n or enter 999 to end entries"));

    if(grade == 999) {
        break;
    }

    //loops the grades to get rid of invalid inputs
    //calculte grades and outputs them
    else if (grade < 0 || grade > 100 || isNaN(grade)){
        continue;
    }

    else if (grade <= 100 && grade >= 94) {
        html = `<p>Grade ${grade} = A<p>`;
        document.write(html);
    }

    else if (grade <= 93 && grade >= 90) {
        html = `<p>Grade ${grade} = A-<p>`;
        document.write(html);
    }

    else if (grade <= 89 && grade >= 87) {
        html = `<p>Grade ${grade} = B+<p>`;
        document.write(html);
    }

    else if (grade <= 86 && grade >= 84) {
        html = `<p>Grade ${grade} = B<p>`;
        document.write(html);
    }

    else if (grade <= 83 && grade >= 80) {
        html = `<p>Grade ${grade} = B-<p>`;
        document.write(html);
    }

    else if (grade <= 79 && grade >= 77) {
        html = `<p>Grade ${grade} = C+<p>`;
        document.write(html);
    }

    else if (grade <= 76 && grade >= 74) {
        html = `<p>Grade ${grade} = C<p>`;
        document.write(html);
    }

    else if (grade <= 73 && grade >= 70) {
        html = `<p>Grade ${grade} = C-<p>`;
        document.write(html);
    }

    else if (grade <= 69 && grade >= 67) {
        html = `<p>Grade ${grade} = D+<p>`;
        document.write(html);
    }

    else if (grade <= 66 && grade >= 64) {
        html = `<p>Grade ${grade} = D<p>`;
        document.write(html);
    }

    else if (grade <= 63 && grade >= 60) {
        html = `<p>Grade ${grade} = D-<p>`;
        document.write(html);
    }

    else if (grade <= 59) {
        html = `<p>Grade ${grade} = E<p>`;
        document.write(html);
    }
} while(true);

