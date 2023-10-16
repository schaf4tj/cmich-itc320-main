"use strict";
//predefine var
let tempFarenheit = 0;
//while loop for var
do {
        tempFarenheit = parseFloat(prompt("Enter temperature in Farenheit (or enter 999 to end):"));
       //break loop
        if (tempFarenheit === 999) {
        break;
}
    //error for invalid input
        else if (tempFarenheit < -100 || tempFarenheit > 212 || isNaN(tempFarenheit)) {
            const errorMsg = `Invalid. You entered ${parseFloat(tempFarenheit)} \nEntry must be between -100 to +212`;
            alert (errorMsg);
    }
     else {
        //calculate and write to docu
        const tempCelcius = (tempFarenheit - 32) * (5/9);

        const html = `<p>${tempFarenheitfharenheit.toFixed(1)} F =  ${tempCelcius.toFixed(1)} C</p>`;
          document.write(html);
         
    }
} while(true);
    