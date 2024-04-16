//  ordinal nmbers

let numbers :number[]= [1,2,3,4,5,6,7,8,9];
for(let num of numbers){

    let ordinalEnd : string;
    if (num === 1){
        ordinalEnd = "st";
    }
else if (num === 2){
    ordinalEnd = "nd";
}else if (num === 3){
    ordinalEnd = "rd";
} 

else {


ordinalEnd = "th";
}
    console.log(`${num}${ordinalEnd}`)


}