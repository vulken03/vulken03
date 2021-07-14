

//sync code(one task completed then other task is started)
// const func2=()=>{
//     console.log("fun2");
// }
// const fun1=()=>{
// console.log("fun1");
// func2();
// console.log("fun1 again");
// }

// fun1();

//-----------------------------------------------------------------------------------------

//async js
// const fun2=()=>{
//     setTimeout(()=>{
  
//     console.log("func2");
//     },2000)
// }

// const fun1=()=>{
// console.log("fun1");
// fun2();
// console.log("fun1 again");
// }
// fun1();

//here, fun2 is run after 2 seconds without intrupt another code.
 
//-----------------------------------------------------------------------------------------

//Currying(instead of taking all arguments at one time, take a one argument and return new fun).

function sum(num1){

    return function(num2){

        return function(num3){

            console.log(num1,num2,num3);

        }
    }

}

//using fat arrow functions
//const sum=(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3); 

sum(1)(2)(3)

//-----------------------------------------------------------------------------------------

//callback hell (all tasks are excecuted one by one)

// setTimeout(()=>{
// console.log("1st")

// setTimeout(()=>{
// console.log("2nd")

// setTimeout(()=>{
//     console.log("3rd")

//     setTimeout(()=>{
//         console.log("4th")
//     },2000)

// },2000)

// },2000)
// },2000)


//-----------------------------------------------------------------------------------------

//Promises

/*

task:- aap mujhe 10 baje call karoge
10am

three stages of promise
1).pending

event time hogaya-> call karo ya nahi
2). resolve -> fullfilled
3).reject
*/

//coding task
//API student 1).after 2 sec. need a rollno then after 2 second need a name

//Produce promise
// const pobj1=new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         let roll_no=[1,2,3,4,5]
//        resolve(roll_no);
//        reject('Error');
        
//     },2000);
// })

// const getBioData=(indexdata)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout((indexdata)=>{
    
//         let biodata={
//             name:"Viraj",
//             age:21
//         }     

//     resolve(console.log(`my rollno is ${indexdata},I am ${biodata.name} and Age 
//     is ${biodata.age}`));

//     reject("error");
//         },2000, indexdata)
//     })
// }

// //Promise consume
// //.then() method is used for get a value of resolve
// pobj1.then((rollno)=>{
  
//  console.log(rollno); 
 
//  getBioData(rollno[1]).then((data)=>{
//      console.log(data);
//  })

// }).catch((err)=>{
//     console.log(err);
// })

//-----------------------------------------------------------------------------------------

//Async and await
const pobj1=new Promise((resolve,reject)=>{

     setTimeout(()=>{
         let roll_no=[1,2,3,4,5]
        resolve(roll_no);
        reject('Error');
        
     },2000);
 })

const getBioData=(indexdata)=>{
     return new Promise((resolve,reject)=>{
         setTimeout((indexdata)=>{
    
         let biodata={
             name:"Viraj",
             age:21
         }     

    resolve(console.log(`my rollno is ${indexdata},I am ${biodata.name} and Age 
     is ${biodata.age}`));

     reject("error");
         },2000, indexdata)
     })
 }

//The word async before a function means one simple thing: A function always returns a promise
//await means give a some time to complete the task when it is done give a output.

async function getData(){
    const rollno_data=await pobj1;
    console.log(rollno_data);

    const bio_datas=await getBioData(rollno_data[1]);
    console.log(bio_datas);

    return bio_datas;//Promise { <pending> } it gives a promise pending because
    //bio_datas required some time to call.

}

const a=getData();

console.log(a);