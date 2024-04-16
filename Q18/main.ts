import { log } from "console";

let placeToVisit : string[] = ["paris","london","newyork","itely"];

// print th original order
console.log("Original Order",placeToVisit);

//  print array in alphabetical order without modifying actual list
console.log("Alphabetical Order:",placeToVisit.slice().sort()); 


// print th original order
console.log("Original Order",placeToVisit);

// print array in reverse alphabetical order without mod
console.log("reverse alphabatical Order",placeToVisit.slice().sort().reverse());

// arrayis still  original order by prinitng it again
console.log("Original Order",placeToVisit);

// reverse the order of your list .print the array to show that its order has changed
console.log("reverse order changed");
placeToVisit.reverse();
console.log(placeToVisit);
//  reverse the order of your list again.print the array to show that
console.log("Original Order",placeToVisit.sort());
console.log(placeToVisit);

//  sort your array so its stord in alphabatical order
console.log("reverse alphabatical order changed:",placeToVisit.sort().reverse());
console.log(placeToVisit);