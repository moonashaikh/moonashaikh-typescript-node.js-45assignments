
// Define Array of Guest
let guestlist:string[] = ["Asma" ,"Rubina","Muzafar","Maheen"];

//  Invite foreach Guest
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are invite to Dinner`)
});

//  invite guest (map)/ 




let invitation:string[] = guestlist.map(guest => `Dear ${guest}, you are invite to Dinner`);
 console.log(invitation);

invitation.forEach(invitation=> {
    console.log(invitation);
});