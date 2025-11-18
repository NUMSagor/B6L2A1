

function formatValue (a:string | number | boolean):(string | number | boolean){
    if(typeof a === "string"){
        return a.toUpperCase();
    }

    if(typeof a === "number"){
        return a*10
    }

    if(typeof a === "boolean"){
        return false
    }

    return "Return Type Undrfined "
}





const getLength = (value:string | []):number => {
    if(typeof value === "string"){
        return value.length;
    }

    if (Array.isArray(value)){
        return value.length
    }

    return 100
}





class Person {
   name: string;
   age: number;


   constructor(name:string, age:number){
    this.name = name;
    this.age = age;
    }

    getDetails(){
       return `Name: [${this.name}], Age: [${this.age}]` 
    }

}




interface bookList{
  title:string;
  rating:number;
}

const books:bookList[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

function filterByRating(books:bookList[]){
  return books.filter((book)=>book.title && book.rating>=4)
}








type User = {
    id:number,
    name:string,
    email:string,
    isActive:boolean,
}


const users:User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



const filterActiveUsers = (users:User[]) => {
  return users.filter(user => {user.isActive = true})
}




interface Book {
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}


function printBookDetails (book:Book)  {
  return `'Title :'${book.title}, 'Author :'${book.author}, 'PublishedYear :'${book.publishedYear}, 'IsAvailable :'${book.isAvailable}` 
};


const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
}





function getUniqueValues (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {

    const arr4 = [...arr1, ...arr2];
    return arr4;
} 

const array1:number[] = [1, 2, 3, 4, 5];
const array2:number[] = [3, 4, 5, 6, 7];





