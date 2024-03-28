"use strict";
let magicianNames = ['Arifa', 'Shaheena', 'Faheem', 'Hayat', 'Shehzad', 'Rose'];
function showMagicians(greet) {
    for (let item of magicianNames)
        console.log(greet, item);
}
showMagicians('hello, how are you Mr.');
showMagicians('hello , ');
