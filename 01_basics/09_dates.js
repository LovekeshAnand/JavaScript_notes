//+++++++++++++++++++++++++DATE++++++++++++++++++++++++

let myDate = new Date()
console.log(myDate);//This will print the exact date and time of the instance.
console.log(myDate.toString());//This will print the date and time in a readable format with day, month, date, year, time

console.log(myDate.toISOString());//this will print the date and time in string format but in normal way which is not readable.
console.log(myDate.toJSON());//this will print the date and time in string format but in normal way which is not readable.
console.log(myDate.toLocaleDateString());//This will only print the date in slashes format which is day/month/year.
console.log(myDate.toLocaleTimeString());//This will only print the time in HH:MM:SS am/pm format.
console.log(myDate.toTimeString());//This will only print in 24 hour format with time zone.

console.log(typeof myDate);//Type of Date is object.

let myCreatedDate = new Date(2022, 0, 16)
console.log(myCreatedDate.toDateString());//We decalred a date here and printed it. From this we can fidn that the indexing of the months in javascript starts from 0.
let myCreatedDateandtiime = new Date(2022, 0, 16, 6, 10)
console.log(myCreatedDateandtiime.toLocaleString());//this will print the time also with date.
let myDates = new Date("2022-01-14")//This is another way to define a Date, here the indexing of the months start from 1.
console.log(myDates.toDateString()); 

let myTimeStamp = Date.now()
console.log(Math.floor(Date.now()/1000));//this will give the value in miliseconds from january 1 1970 to to now.

let newDate = new Date()
console.log(newDate);//this will print today's dte with time
console.log(newDate.getMonth());//this print the current month
console.log(newDate.getMonth()+1);//this will increase the number of month by 1, if it's 6th month, +1 will make it 7th month
console.log(newDate.getDay());//this print the today's day