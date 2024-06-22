const marvels_heros=["thor", "Ironman", " Spiderman"];
const dc_heros=["superman", "flash", "batman"];


//marvels_heros.push(dc_heros);

// console.log(marvels_heros);
// console.log(marvels_heros[3][1]);

const all_heros=marvels_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros=[...marvels_heros, ...dc_heros];
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6], 7, [6,7,[4,5]]];

const my_real_another_array=another_array.flat(Infinity);
console.log(my_real_another_array);


console.log(Array.isArray("ritwik"));
console.log(Array.from("ritwik"));
console.log(Array.from({name:"Ritwik"}));    //intersting

let score1=100
let score2=300
let score3=400
let score4=500

console.log(Array.of(score1,score2,score3,score4));

