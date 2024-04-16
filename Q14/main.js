// Define Array of Guest
var guestlist = ["Asma", "Rubina", "Muzafar", "Maheen"];
//  Invite foreach Guest
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invite to Dinner"));
});
//  invite guest (map)/ 
var invitation = guestlist.map(function (guest) { return "Dear ".concat(guest, ", you are invite to Dinner"); });
console.log(invitation);
invitation.forEach(function (invitation) {
    console.log(invitation);
});
