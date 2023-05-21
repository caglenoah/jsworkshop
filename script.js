//comparisons will always result in either a true or a false value
const pets = 1;
 //the conditional in this variable is hasMoreThanOnePet
 //the value of this is pets > 1; 
const hasMoreThanOnePet = pets > 1;
//you will see the value is false
console.log(hasMoreThanOnePet)

//because this comparison ..pets > 1;.. is not true so it has resulted with a false
//you can use ..<.. or ..>.. in order to do basic comparisons in js

//there is another type of comparison. We can check if values are equivalent
//equivalency checks use two equal signs
// pets is the name of the value (pets=1) therefore const hasOnePet = pets(1) == 1 is true. because one equals one lol
// one equal sign when we are assigning. two or three equal signs when we are comparing
const hasOnePet = pets == 1;
console.log(hasOnePet);

//not just good for numbers but also works with strings
const keyword = 'stop';
console.log(keyword == 'stop');
//will apear as true because stop=stop

//const keyword = 'stop';
//console.log(keyword == 'stopp');
//this will apear as false. because stop does not equal stopp. therefore stop=stopp is not a true statement
