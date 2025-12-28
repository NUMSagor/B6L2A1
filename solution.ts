

function formatValue (a:string | number | boolean):(string | number | boolean){
    if(typeof a === "string"){
        return a.toUpperCase();
    }

    if(typeof a === "number"){
        return a*10
    }

    if(typeof a === "boolean"){
        return !a
    }

    return "Return Type Undrfined "
}






function getLength ( value : string | (string|number)[] ):number {
       
       if(typeof value === "string"){
         return value.length;

       }

       if(Array.isArray(value)){
        return value.length
       }

       return 10;
}





class Person {
   name: string;
   age: number;


   constructor(name:string, age:number){
    this.name = name;
    this.age = age;
    }

    getDetails(){
      return `Name: ${this.name}, Age: ${this.age}`
 
    }

};









interface Book {
  title:string;
  rating:number;
};


const books:Book[]=[
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 }
];

function filterByRating(items:Book[]):Book[]{
  return items.filter((item)=>item.rating >= 4)
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



const filterActiveUsers = (users:User[]):User[] => {
  return users.filter(user => user.isActive === true)
}







interface BookDetails {
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}


function printBookDetails (book:BookDetails):string  {

  const Available=book.isAvailable ? 'Yes' : 'No';

  return (`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${Available}`);
};









function getUniqueValues (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {


  const result:(string | number) [] = [];


  function exist(value:string | number):boolean{

    for(let i=0; i<result.length; i++ ){
      if(result[i] === value){
        return true;
      }
    }

    return false;
    
  };

  for(let i=0; i<arr1.length; i++){
    if(!exist(arr1[i])){
      result[result.length] = arr1[i]
    }
  }

  for(let i=0; i<arr2.length; i++){
    if(!exist(arr2[i])){
      result[result.length] = arr2[i]
    }
  }


  return result

    
};








type Product = {
    name:string,
    price:number,
    quantity:number,
    discount?:number,
}
 
function calculateTotalPrice(products:Product[]):number {
     if(products.length === 0){
        return 0;
     }

    const price=products.map((product)=>{
      const totalPrice=product.price * product.quantity;
      const discount=product.discount ?? 0;
      return  totalPrice -(totalPrice*discount)/100

    })   
    
    return price.reduce((sum,price)=>sum+price)

};








