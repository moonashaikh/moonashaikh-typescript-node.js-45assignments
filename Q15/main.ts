


// Define Array of Guest
let guestlist:string[] = ["Asma" ,"Rubina","Muzafar","Maheen"];

//  print tge name who can't make dinner

let unableAttend:string = guestlist.splice(2,1)[0];  // splice remove name from array list
console.log(`${unableAttend} cant make Dinner for me`)

//  push
guestlist.push("Hina Naseer");  // push is used to add name or number in an array

console.log(guestlist);
//  print message
guestlist.forEach(guest =>
       {
        console.log (`Dear ${guest}, you are invited`)
});

