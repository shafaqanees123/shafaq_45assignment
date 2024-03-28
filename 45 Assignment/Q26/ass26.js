"use strict";
let alien_color1 = 'green';
if (alien_color1 == 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
//  Failing Version
alien_color1 = 'red';
if (alien_color1 == 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
console.log("Congratulations! You just earned 10 points.");
