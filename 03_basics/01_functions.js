
///FUNCTION

function sayMyName(){

console.log("R");
console.log("I");
console.log("T");
console.log("W");
console.log("I");
console.log("K");


}

sayMyName()


function addTwoNumber(number1, number2) {
   console.log( number1+number2);

}
function addTwoNumber(number1, number2) {
//    let  result=number1 + number2;
//    return result;
//    console.log("Ritwik Biswas");

return number1+number2;
}

 const ans=addTwoNumber(3,4);

 console.log("ANS:",ans);

 function loginUserMessage(username="Raj") {
    if(username === undefined){
        console.log("Please enter a userName");
        return;

    }

    return `${username} just logged in`
 }

 console.log(loginUserMessage("hitesh"));
 console.log(loginUserMessage());



 function calculateCartPrice(val1,val2,...num1){

    return num1;
 }

 console.log(calculateCartPrice(200,300,6000));


 const user={

    username:"Ritwik",
    Price:200
 }

 function handleObject(anyObject){

    console.log(`Username is ${anyObject.username} ans price is${anyObject.Price}`)
 }

 handleObject(user);


 handleObject({

    username:"Raj",
    Price:899
 })

 const myNewArray=[200,700,400]

 function returnSecondValue(getArray){

    return getArray[2]
 }

 console.log(returnSecondValue(myNewArray));