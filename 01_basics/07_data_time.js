// let myDate= new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


// // let myCreatedDate=new Date(2024,0 ,24,3, 5);
 //let myCreatedDate=new Date("2024-01-15");
// console.log(myCreatedDate.toLocaleDateString());

let newDate= new Date();

console.log(newDate.getDay());


// `${newDate.getDay()} and the time`

newDate.toLocaleDateString('default',{

    weekday:"long",
    timeZone:''
})

