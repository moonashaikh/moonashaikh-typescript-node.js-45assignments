// Define Array of Guest
var guestlist = ["Asma", "Rubina", "Muzafar", "Maheen"];
//  print tge name who can't make dinner
var unableAttend = guestlist.splice(2, 1)[0]; // splice remove name from array list
console.log("".concat(unableAttend, " cant make Dinner for me"));
//  push
guestlist.push("Hina Naseer"); // push is used to add name or number in an array
console.log(guestlist);
//  print message
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited"));
});
//  Pop
