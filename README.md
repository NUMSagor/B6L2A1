### 1. type ও interface

TypeScript এ টাইপ নির্ধারণের ক্ষেত্রে দুই ধরনের পদ্ধতি ব্যবহার করা হয়।
একটি type কিওয়ার্ড এর মাধ্যমে অপরটি interface  কিওয়ার্ডের মাধ্যমে। 

যদিও type ও interface এর উদ্দেশ্য এক কিন্তু তাদের ব্যবহারের ক্ষেত্র ভিন্ন। type এর মাধ্যমে primatives,union,intersection এবং object প্রকাশ করা যায়। কিন্তু interface এর মাধ্যমে object প্রকাশ করা যায়  এবং একাধিক interface সমন্বয় করা যায়।

উদাহরনঃ

## type


type Name = string;

const name:Name="Hasan Mahmud";

type Price = number;

const price:Price = 250;


type Admin = boolean;

const isAdmin:Admin =  true;


type Student = {
    id:number;
    name:string;
    group:science;
    address:{
        road:number;
        area:string
    }

}

//we cannot do this for type, it will occur duplicate error, as we declare type Student above

type Student = {
    year:number
}



## interface

interface Name = string;             |
                                     |-> interfase এর ক্ষেত্রে এভাবে ব্যবহার করা যায় না
 const studentName:Name = "Russell"  |                                 
                                     |


interface Number = number;           |
                                     |
                                     |-> interfase এর ক্ষেত্রে এভাবে ব্যবহার করা যায় না
 const studentId:Number = 120;       |
                                     |




//interface এর ক্ষেত্রে আমরা ডুপ্লিকেট interface ব্যবহার করতে পারি

interface User {
    id:number;
    name:string;

}
 
interface User {
    address{
        road:number;
        area:string; 
    }
}


const user:User ={
    id:102,
    name:"Hasan",
    address{
        road:3,
        area:"Dhanmondi"

    }
}


performance এর গুরত্ব বিবেচনায় type ও  interface এর মধ্যে খুব বেশি পার্থক্য লক্ষ করা যায়না । তবে type extension এর ক্ষেত্রে interface ব্যবহার করাই উত্তম।

যেমন-

interface Width extend Max {
    isMaximized:boolean;
}




### 2.enum
--------

enum হল enumeration এর সংক্ষিপ্ত রুপ। enum এমন এক ধরনের class যার উপাদান গুলো সুনির্দিষ্ট ও অপরিবর্তনীয়।  সপ্তাহের সাত দিনের নাম, একটি বছরের ১২ মাসের নাম কিংবা  অন্যান্য নির্দিষ্ট মান নিয়ে enum গঠিত হয়। 

enum দুই ধরনের হতে পারে- Numeric enum, String enum । 'enum' কিওয়ার্ড  দ্বারা enum সূচিত করা হয় ।


 ## Numeric enum

 Numeric enam এর ক্ষেত্রে স্বয়ংক্রিয় ভাবে এর প্রথম উপাদান ০ দ্বারা সূচিত করা হয় এবং  পরবর্তী উপাদান গুলোর সাথে প্রতি ক্ষেত্রে ১ যোগ হয়। যেমন-

 enum Day{
    Sat,
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri
 }

এক্ষেত্রে Sat = 0, এভাবে পরবর্তী উপাদানের ক্ষেত্রে 1 করে বাড়তে থাকবে ।

console.log(Dat.Mon) //2


 Numeric  enum  এ ইচ্ছা মতো ভ্যালু যোগও  করা যায়।  যেমন -

 enum Position{
    first=100,
    second=90,
    third=80
 }

console.log(Position.second)//90


## String enum

String enum এর উপাদান গুলো string।  সাধারণত ধ্রুবক মান দ্বারা কিংবা অন্য string enum এর মান দ্বারা string enum  সূচিত করা হয়। 
String enum এর মানগুলো Numeric enum এর মানের মতো ক্রমশ বৃদ্ধি পায় না ।


enum Status{
    pending:"PENDING",
    approved:"APPROVED"
}

console.log(Status.pending)//PENDING
