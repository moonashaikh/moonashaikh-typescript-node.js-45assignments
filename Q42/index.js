"use strict";
let magician = ['Harry Potter', 'hermion Granger', 'Ron weasley', 'Albus Dumbledore'];
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        magician[i] = 'the Great' + magicianarray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
