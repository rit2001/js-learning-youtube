// object as singleton


//const tinderUser = new Object(). ---------> singleton objects

//Non sigleton object
const tinderUser= {}


tinderUser.id="123abc"
tinderUser.name="Raj"
tinderUser.isLogged=false
console.log(tinderUser);


const regularUser={

    email:"help@gamil.com",
    fullName:{
        userFullName:{
            fisrtName:"Ritwik",
            Lastname:"Biswas"
        }
    }
}

console.log(regularUser.fullName.userFullName.Lastname);


const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

const obj3={obj1, obj2}

console.log(obj3);
const obj4=Object.assign({},obj1, obj2)

console.log(obj4);


const obj5={...obj1,...obj2};
console.log(obj5);


const users =[

    {
        id:1,
        email:"hello@google.com"
    },
]

// users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));



///Destructing of object

const course ={

    coursename:"js in  bengali",
    price:2000,
    courseInstructor:"Ritwik"
};


const {courseInstructor:instructor}=course;

console.log(instructor);

const navbar=({company}) => {

}

navbar(company:"Ritwik")

//JSON

{
    "name":"Ritwik",
    "Coursename":"Js in bengali",
    "Price":"FREE"
}

