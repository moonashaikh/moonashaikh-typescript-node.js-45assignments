//  make array curren user

let current_users :string[]  = ['ali','asMa','usama','RuBina','jhon'];

let new_users :string[]  = ['aftab','ali','moona','manzoor','RuBina'];

new_users.forEach(newUsername => {
let lowerCase:string= newUsername.toLowerCase();
if(current_users.map(c_user =>c_user.toLowerCase()).includes(lowerCase)){

    console.log(`The username  ${newUsername} is  not available, please write different user name`)
}  else{
    console.log(`The username  ${newUsername} is available`)
}

}) 