const userName : string[]= ['admin','Bugs Bunny','Daffy Duck','sylvester' ,'Tweety'];


// for(let i= 0 ; i<userName.length ; i++) {
//     if (userName[i]== 'admin'){
//         console.log('Hello admin, would u like to see astatus report');
//     } else 
//     {
//         console.log(`Hello ${userName[i]} , thank u for login in again`)
//     }
// }

userName.forEach(userNames => {
    
    if(userNames === 'admin') {
        console.log('Hello admin, would u like to see astatus report');

    }
    else 
        {
            console.log(`Hello ${userNames} , thank u for login in again`)
        }
});