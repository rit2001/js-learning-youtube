const myObject ={
    js:'javacript',
    cpp:'c++',
    rb:'ruby',
    swift:"swaift by app"

}

for (const key in myObject) {
    //console.log(`${key} shortcut is for :${myObject[key]}`);
    
}

const programming=["c++", "rb","js","swift"]

for (const key in programming) {
    console.log(programming[key]);
    
}

const map=new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "America")
map.set('UK', "Britain")

for (const key of map) {
    console.log(key);
    
}
