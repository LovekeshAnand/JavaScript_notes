const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//for in loop
for (const key in myObject) {
    console.log(`${key} is short term for ${myObject[key]}`);
    //this is how we can iterate in a object using for in loop and get a key-value pair
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const [key, value] in map) {
    console.log(map[key, value]);
}