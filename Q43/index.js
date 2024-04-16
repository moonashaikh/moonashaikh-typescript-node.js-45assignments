"use strict";
// unchanged magition
let magician = ['Harry Potter', 'hermion Granger', 'Ron weasley', 'Albus Dumbledore'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        magicianarray[i] = 'the Great' + magicianarray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicianarray = copyArray(magician);
make_great(copymagicianarray);
console.log('this is my original array');
show_magicians(magician);
console.log('\n\n this is my modified copy array');
show_magicians(copymagicianarray);
