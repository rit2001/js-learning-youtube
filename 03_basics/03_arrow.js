const user={

    username:"Ritwik",
    price:999,


    welcomeMessage:function(){

        console.log((`${this.username} welcome to website`));
        console.log(this);

    }


}
user.welcomeMessage()
user.username="ritwik"
user.welcomeMessage()

console.log(this);

// function coffee(){

//     let username="Ritwik"

// console.log(this.username);
// }

// coffee()

// const coffee=function()
// {
//     let username="Ritwik"

//     console.log(this.username);

// }

// coffee()
const coffee = () => 
{
    let username="Ritwik"

    console.log(this);

}

coffee()

const addTwo =(num1, num2) =>{

    return num1+num2;
}

console.log(addTwo(3,4));
//const addTwo =(num1, num2) => num1 + num2
const addThree =(num1, num2) => ({username:"Ritwik Biswas"})

    

console.log(addTwo(3,4));
console.log(addThree(3,4));

const myArray=[4,5,6,7]

//myArray.forEach(()=>())

    