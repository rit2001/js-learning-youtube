const name="Ritwik";
const repoCount=50

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName=new String('Ritwik');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('w'));


const newString=gameName.substring(0,3)
console.log(newString);

const anotherString =gameName.slice(-7,4)
console.log(anotherString);

const oldString="    Ritwik    "
console.log(oldString)
console.log(oldString.trim());


const url="https://ritwik.com/ritwik%20hello"

console.log(url.replace('%20', '-'));

console.log(url.includes('Happy'));

const middle_string ="I have done my dinner";

const rito=middle_string.split(" ",);
console.log(rito);


