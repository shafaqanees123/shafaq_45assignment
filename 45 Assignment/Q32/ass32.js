"use strict";
let current_user = ['user1', 'user2', 'user3', 'user4'];
let new_user = ['user1', 'user6', 'admin', 'user7'];
new_user.forEach(newUser => {
    if (current_user.some(currentUser => currentUser.toLowerCase())) {
        console.log(`${newUser} will need to enter s new username`);
    }
    else {
        console.log(`${newUser} is available`);
    }
});
