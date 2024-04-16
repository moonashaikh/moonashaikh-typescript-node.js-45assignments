//  conditional tests. write series of conditioal test -10
var car = 'subaru';
var age = 25;
var numbers = [1, 2, 3, 4];
// test 1 : equality (true)
console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota');
// test 2 : strict equility
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
// test 3 : inequility(true)
console.log(" Is car === 'subaru' ? I predict True");
console.log(car === 'subaru');
// test 4 :inequility(false)
console.log(" Is car !== 'subaru' ? I predict False");
console.log(car !== 'subaru');
// test 5 : lower case conversion true
console.log(" Is car.toLowerCase() === 'subaru' ?  I predict True");
console.log(car.toLowerCase() === 'subaru');
// test 6 : lower case conversion false
console.log(" Is car.toLowerCase() === 'subaru' ?  I predict True");
console.log(car === car.toLowerCase()); //false original value remains uppercase
// test 7 : nmerical test (Equility True
console.log(" Is age == 25 ?  I predict True");
console.log(age == 25);
// test 8 (inEquility false)
console.log(" Is age !== 30 ?  I predict true");
console.log(age !== 30);
// test 9 (Greater than false)
console.log(" Is age > 30 ?  I predict false");
console.log(age > 30);
// test 10 :(less  than or equl (true))
console.log(" Is age < = 25 ?  I predict true");
console.log(age <= 25);
//  Logical operator
//  test 11(AND True)
console.log(" Is age > 20 && age < 30 ?  I predict true");
console.log(age > 20 && age < 30);
//  test 12(OR False)
console.log(" Is age > 30 || age < 18 ?  I predict false");
console.log(age > 30 || age < 18);
//  Array test
//  test 13 : in array(true)
console.log(" Is 3 in numbers ?  I predict true");
console.log(3 in numbers);
//  test 13 : in array(false)
console.log(" Is 5 not  in numbers ?  I predict false");
console.log(5 in numbers);
