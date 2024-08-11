const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    return item
})

// console.log(values);// this will return undefined
//no values will be returned

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(myNums.filter((num) => num > 4))//this will filter out all the elements from the array based ont the condition entered in the function
//if we use curly braces instead of single line function we have to write return keyword with the condition we enter, otherwise it will return nothing

const newNums = []
//wrote the same program for filter using forEach
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})
// console.log(newNums); 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((bk) => bk.genre === 'History')
//   console.log(userBooks);

  const bookpublish = books.filter((bk) => bk.publish > 1995 && bk.genre === 'History')
  console.log(bookpublish);
  
  