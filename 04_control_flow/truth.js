const userEmail="Ritwik@ai"

if(userEmail)
    {
        console.log("Got user Email");
    }
    else{

        console.log("Don't have user Email")
    }

    //falsy values

    //false,0,-0,BigIt 0n, "", null, undefined,NaN

    //truthy values
    //"0",'false'," ",[],{},fuction(){}

    // if(userEmail.length===0)
    //     {
    //         console.log("Array is empty");
    //     }

    const emptyObj={}
    if(Object.keys(emptyObj).length===0){
        console.log("Object is empty");

    }

    //Nullish Coalescing Operator(??): null undefined

    let val1;
    //val1=5 ?? 10
    //val1=null ?? 10

    

    //var1= undefined ?? 15
    va1=undefined ?? 10 ?? 40
    console.log(val1);


    ///Terniary Operation

    //condtion ? true : false

    const iceTeaPrice=100

    iceTeaPrice <= 80 ? console.log("Less than 80"): console.log("Greater than 80");
