const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (item) {
    console.log(item);
})//here we denoted the elements of the array as item and here function is made to perform tasks on each element of the array. 
//the task we want to perform on the elements we can write it inside the function

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )