//enable strict
"use strict";

//Regional sales arrays
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

//totals by quarter
const q1Total = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];
const q2Total = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];
const q3Total = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];
const q4Total = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];

//total of regions w/ for loops
let region1Total = 0;
let region2Total = 0;
let region3Total = 0;
let region4Total = 0;
let region5Total = 0;

for (var i = 0; i < region1.length; i++) {
    region1Total += region1[i];
}

for (var i = 0; i < region2.length; i++) {
    region2Total += region2[i];
}

for (var i = 0; i < region3.length; i++) {
    region3Total += region3[i];
}

for (var i = 0; i < region4.length; i++) {
    region4Total += region4[i];
}

for (var i = 0; i < region5.length; i++) {
    region5Total += region5[i];
}
//total of all regions
const totalSales = region1Total + region2Total + region3Total + region4Total + region5Total;

//format output
const html = `<h2> Sales by Quarter </h2> 
Q1: $${q1Total}<br>Q2: $${q2Total}<br>Q3: $${q3Total}<br>Q4: $${q4Total}<br>
<h2> Sales by Region </h2>
Region 1: $${region1Total}<br>Region 2: $${region2Total}<br>Region 3: $${region3Total}<br>Region 4: $${region4Total}<br>Region 5: $${region5Total}
<h2> Total Sales </h2>
$${totalSales}`;

//results display
document.write(html);