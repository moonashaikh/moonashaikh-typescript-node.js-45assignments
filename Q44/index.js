"use strict";
function makesandwitch(item) {
    console.log('\nmaking your sandwhichwith:\n\n');
    item.forEach(element => console.log("- " + element));
    console.log('enjoy your sandwhich\n');
}
makesandwitch(['ham', 'cheese', 'lettuce']);
makesandwitch(['turkey', 'Bacon']);
makesandwitch(['peanutbutter', 'Bacon']);
