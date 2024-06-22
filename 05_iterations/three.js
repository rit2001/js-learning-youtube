// for of loop


const arr=[1,2,3,4,5]


for (const num of arr) {

    console.log(num);
    
}

const greeting = "Hello World !"

for (const geeet of greeting) {
   console.log(`Each char is:${geeet}`);
    
}

const map=new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "America")
map.set('UK', "Britain")

console.log(map);

for (const [key,value] of map) {
    console.log(key,value);
    
}

const myObject={
    'game1':'NFS',
    'game2':'Spideman'
    'game3':'Shaktamn'
}

