const coding =["js","ruby","cpp","python"]

coding.forEach( function  (item){

    console.log(item);

})

coding.forEach((item) =>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach( (item,index,arr)=> {

    console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"java",
        languageFilename:"java",
    },
    {
        languageName:"pyhon",
        languageFilename:"py",
    },
    {
        languageName:"c plus plus",
        languageFilename:"c++",
    },
]

myCoding.forEach( (item) =>{
    console.log(item.languageFilename);
})