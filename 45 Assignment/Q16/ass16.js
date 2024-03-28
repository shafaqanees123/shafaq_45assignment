"use strict";
let guestArr = ['Kamran tessori', 'sir zia', 'sir qasim'];
let canNotAttend = 'Sir zia';
let newGuest = 'Sir ameen';
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((item)=>
// console.log(`Dear ${item}, I found a bigger dinner table`)
// )
// let guestBegin:string = 'class fellow'
guestArr.unshift('class mates');
// console.log(guestArr)
let middleGuest = 'Prime minister';
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr)
guestArr.push('IT chairman');
console.log(guestArr);
guestArr.map((item) => console.log(`Dear ${item},you are invited to a dinner`));
