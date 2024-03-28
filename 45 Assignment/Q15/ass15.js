"use strict";
let guestArr = ['kamran tessori', 'sir Zia', 'sir Qasim', 'Sir Ameen'];
let canNotAttend = 'kamran tessori';
console.log(canNotAttend + ' ' + 'Can not attend for you dinner party');
let newGuest = " Class Teacher";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((item) => console.log(`Dear ${item}, You are invited to a dinner party`));
