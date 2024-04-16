// unchanged magition

let magician : string[] = ['Harry Potter', 'hermion Granger','Ron weasley','Albus Dumbledore'];
function copyArray(arr:string[]){
    return[...arr]
}

function make_great(magicianarray:string[]){
  for(let i=0; i<magicianarray.length ; i++) {
    magicianarray[i]   ='the Great'    +  magicianarray[i]
  }
      
   
}
function show_magicians(magicians :string[]) {
    magicians.forEach( element => {
  console.log(element);
    });
}
const copymagicianarray = copyArray(magician);

make_great(copymagicianarray);

console.log('this is my original array');

show_magicians(magician);

console.log('\n\n this is my modified copy array');

show_magicians(copymagicianarray)