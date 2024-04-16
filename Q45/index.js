"use strict";
// function examplefunc(...param:string[]){            // ...param define datatypes
// console.log(param);
// }
//  examplefunc('taha','ahmed','human','alive','student');
function storeCarInfo(manufacture, modelName, ...extraOption) {
    const carinfo = Object.assign({ manufacture,
        modelName }, Object.assign({}, ...extraOption));
    return carinfo;
}
;
let answer = storeCarInfo('Honda', 'civic', { color: 'black' }, { features: ['Navigatio', 'power window'] });
console.log(answer);
