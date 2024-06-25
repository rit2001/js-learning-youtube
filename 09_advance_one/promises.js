const promise1=new Promise(function(resolve,reject) {
    //Do an asyn task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("Promise consumed");
})

new Promise (function(resolve,reject){

    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const Promise3=new Promise(function(resolve,reject){
    setTimeout(function(){

        resolve({username:"chai",email:"coffee@taking.com"})

    },1000)
})
Promise3.then(function(user){
 console.log(user);
})

const promise4=new Promise(function(resolve,reject){

    setTimeout(function() {
        let error=true;
        if(error)
            {
                resolve({username:"Ritwik", Password:"123"})
            }
            else
            {
                reject('ERROR:Something worng!')
            }
        
    })

},1000)

promise4
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);

}).
catch(function(error){
    console.log(error);
}).
finally(()=>console.log("The promise either resolved or rejected"))

const promise5 = new Promise(function(resolve, reject) {
    // Your promise logic here
    setTimeout(function() {
        let error=false;
        if(error)
            {
                resolve({username:"Javacript", Password:"123"})
            }
            else
            {
                reject('ERROR:Js went worng!')
            }
        
        },1000)

});



async function consumepromise5(){

    try {
        const response=await promise5
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumepromise5()

// async function getAllUsers(){
    
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//        const data=await response.json()
//        console.log(data);
        
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
// }



//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').
then((response) => {

    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))
