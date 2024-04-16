// creating guest list array

let guestlist = ["Hamza", "usman", "Ali", "Ayesha"]

//  making varible guest who cant come
let dontcome =guestlist[0];

console.log(dontcome , "Nai asaka");

guestlist.splice(0, 1, "Amir"); // splice use to remove any name fro list
console.log("Good New , we have found a Bigger Table for Dinner");
guestlist.unshift("Ali");    // unshift add new name

// adding a new value at ending index of array
guestlist.push("zain");

// add middle value in array
let middleindex : number = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex ,0,"osama")

console.log("update our guest list");
guestlist.forEach(oneguest =>console.log(`salam ${oneguest} , would u like to dinner with me`));

// inform only twoguest fro inviting
console.log("unfortunately,new table not arrive on time, so i can invite two guest only");
// using while loop to remove guest from array
while(guestlist.length > 2){
    let removedGuest =guestlist.pop()
console.log(`sory, ${removedGuest } , i cant invite u to dinner`)
}

console.log("invitation to last twoguest");
guestlist.forEach(lasttwo =>console.log(`lucky ${lasttwo} ,you are still invited to dinner `));

guestlist.pop();
guestlist.pop();

console.log("empty List", guestlist)