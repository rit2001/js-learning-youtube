var c=300;
let a=500;

if(true)
    {
        let a=10
        const b=20
        var c=30
        // console.log("INNER:",a);


    }
// console.log(a);
// console.log(b);
// console.log(c);


// +++++++++++++++++++++++++nested Scope++++++++++++++++++++++++

function one (){

    const userName="Ritwik Biswas";

    function two()
    {
        const website="Youtube";
        // console.log(userName);
    }

    console.log(website);
    two()
}

if(true){

    const username="Ritwik",
    if(username === "Ritwik")
        {
            const website="YouTube"
            console.log(username+ website)
        }

        //console.log(website);
}

//console.log(username);

// +++++++++++++++++++++++++Interseting+++++++++++++++++++++

function addone(num)
{
    return num+1
}

addone(5)

const addTwo=function(num){
    return num+2;
}

addTwo(5)