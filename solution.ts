 // problem-1

// function formatValue (a:string | number | boolean){
//     if(typeof a === "string"){
//         return a.toUpperCase();
//     }

//     if(typeof a === "number"){
//         return a*10
//     }

//     if(typeof a === "boolean"){
//         return false
//     }
// }




// problem-2


// const getLength = (value:string | any[]) => {
//     if(typeof value === "string"){
//         return value.length;
//     }

//     if (Array.isArray(value)){
//         return value.length
//     }
// }



// problem-3


// class Person {
//    name: string;
//    age: number;


//    constructor(name:string, age:number){
//     this.name = name;
//     this.age = age;
//     }

//     getDetails(){
//        return `Name: [${this.name}], Age: [${this.age}]` 
//     }

// }



// problem-4

// interface bookList{
//   title:string;
//   rating:number;
// }

// const books:bookList[] = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// function filterByRating(books:bookList[]){
//   return books.filter((book)=>book.title && book.rating>=4)
// }





// problem-5


// type User = {
//     id:number,
//     name:string,
//     email:string,
//     isActive:boolean,
// }


// const users:User[] = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];



// const filterActiveUsers = (users:User[]) => {
//   return users.filter(user => {user.isActive = true})
// }


// problem-6

// interface Book {
//     title:string;
//     author:string;
//     publishedYear:number;
//     isAvailable:boolean;
// }


// function printBookDetails (book:Book)  {
//   return `'Title :'${book.title}, 'Author :'${book.author}, 'PublishedYear :'${book.publishedYear}, 'IsAvailable :'${book.isAvailable}` 
// };


// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// }



// problem-7

// function getUniqueValues (a:string [] | number[], b:string [] | number[]):(c:string [] | number[]) {

//  const newArr = new Array;

//  if (a[i] === b[i]){
//   return newArr;

//  }
 
// }


// problem-8


interface Products {
  name:string;
  price:number;
  quantity:number;
  discount?: number;
}

function calculateTotalPrice (products:Products[]):(Products[]) {

   return new Array

}