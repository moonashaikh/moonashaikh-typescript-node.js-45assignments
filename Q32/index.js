"use strict";
//  make array curren user
let current_users = ['ali', 'asMa', 'usama', 'RuBina', 'jhon'];
let new_users = ['aftab', 'ali', 'moona', 'manzoor', 'RuBina'];
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username  ${newUsername} isnot available, please write different user name`);
    }
    else {
        console.log(`The username  ${newUsername} is available`);
    }
});
