//immediately Invoked Function Expressions (IIFE)
(function coffee(){

    console.log(`DB CONNECTED`);
})();


((name) => {

    console.log(`BD CONNECTED TWO ${name}`);
})('Ritwik')

