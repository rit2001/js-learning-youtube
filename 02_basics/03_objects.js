//singleton




//symbol

const mySym=Symbol("key1")



//Object Listerals

const JsUser={
   
    name:"Ritwik",
    "full name":"Ritwik Biswas",
    [mySym]:"myKey1",
    age:18,
    location:"Kolkata",
    email:"Ritwik@google.com",
    isLoggedIn:false,
    LastLoginDays:["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email="Ritwik@chatgpt.com";

//Object.freeze(JsUser);
JsUser.email="Ritwik@apple.com";
console.log(JsUser);

JsUser.greeting=function(){

    console.log("Hello Js User");
}

console.log(JsUser.greeting());
JsUser.greetingTwo=function(){

    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());