// creating guest list array
var guestlist = ["Hamza", "usman", "Ali", "Ayesha"];
//  making varible guest who cant come
var dontcome = guestlist[0];
console.log(dontcome, "Nai asaka");
guestlist.splice(0, 1, "Amir"); // splice use to remove any name fro list
console.log("Good New , we have found a Bigger Table for Dinner");
guestlist.unshift("Ali"); // unshift add new name
// adding a new value at ending index of array
guestlist.push("zain");
// add middle value in array
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "osama");
console.log("update our guest list");
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, " , would u like to dinner with me")); });
