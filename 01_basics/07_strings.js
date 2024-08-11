 //This program concatinates the 1 or more string 
 const name = "lovekesh"
 const repocount = 50

 console.log(name + repocount + "Value");//It will print lovekesh50 value
 //This is outdated syntax
 //instead of the above syntax we can use

 console.log(`Hello my name is ${name} and i have made ${repocount} repositories.`);
//In this syntax we can directly inject variables and concatinate the strings.
//This syntax is known as string interpolation and we have to use back lash instead of double quotes.

const gameName = new String('lovekesh-anand')//this is the original way to declare a string
console.log(gameName);
//With this decalration we get key-value pairs which means
/* key    value
    0       l
    1       o
    2       v
    3       e
    4       k
    5       e
    6       s
    7       h
*/
//It's not an array but the indexing is done similar to array 

console.log(gameName[2]);
//Through this we can get the character at the entered index number.

console.log(gameName.length);//this will print the length of the string.
console.log(gameName.toUpperCase());//this will convert the string to uppercase.
console.log(gameName.charAt(2));//This is use to find the character at the entered index number in a string.
console.log(gameName.indexOf('s'));//This is to find the index number of the entered character in a string. 
//there are many functions like length, toUpperCase(), charAt(), etc to study.

const newString = gameName.substring(0, 4) //This will store the characters of the string from the entered starting index number to the end index number.
console.log(newString);
//In this, the last character of the entered index numbers will not be included.
/* for example:
               if we enter (0, 4) in name.substring(0, 4) and the string is lovekesh 
               only love will store in a new variable. The character at 4 index number
               will not store.
*/

const anotherString = gameName.slice(-8, 4)//This will slice the characters of the string from the entered starting index number to the end index number.
console.log(anotherString);
//var.slice() can also take numbers in negative and can slice the string in reverse.

const newStringOne = "    lovekesh    "
console.log(newStringOne.trim());//trim() removes extra spaces from the string

const url = "https://lovekeshaanand.com/lovekesh%20anand"
console.log(url.replace('%20', '-')); //This will replace the character or number (it can be one or more) to the character or number entered in replace() with the seperating character.
//replacing charactre or number
//syntax:-  var.replace(character or number to replace, new character or number)

console.log(url.includes('lovekesh')); //This will check if the string contains the character or number (it can be one or more) that we put in var.includes(' ').

console.log(gameName.split('-'));//This will split the string from the entered character and make it seperate and store it in a array.
/* for example we entered '-', this means we want the string to split from where '-' this character exists. 
Than from there it will split and store in a array as differet strings.*/