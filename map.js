//map
function double(num){
    return num*2;
}
let a=[2,3,4,5,6,7];
let doubledArr=a.map(double);
console.log(doubledArr);
const tripleArr=a.map((n)=>n*3);
console.log(tripleArr);

//map 
function odd(v){
    if(v%2!=0){
     return true;
    }else{
      return false;
    }
}
let findodd=a.map(odd);
console.log(findodd);

//map using arrow function
const even = a.map((n)=>n%2!==0);
console.log(even);

//filter
function isodd(num){
    return num%2!==0;
}
let oddnum=a.filter(isodd);
console.log(oddnum);

//find multiple of five using filter
let array=[13,15,20,35,27];
const multiple=array.filter((num)=>num%5==0);
console.log(multiple);

//reduce
let arr=[1,2,3,4,5,6];
let sum=arr.reduce((product,current)=> {return product*current},2);
console.log(sum);

let add=arr.reduce((a,b)=>{return a+b},1);
console.log(add);


//map,filter,reduce
let array1=[1,2,3,4,5,6,7,8];
let triple=array1.map((num)=>{return num*3});
console.log(triple);
let iseven=triple.filter((num)=>num%2===0);
console.log(iseven);
let sums=iseven.reduce((c,d)=>{return c+d},6);
console.log(sums);

//single line 
let ans=array1.map((n)=>n*3).filter((n)=>n%2==0).reduce((a,b)=>{return a+b},6);
console.log(ans);

//destructuring
let b=[1,2,3,4,5];
const[one,two]=b;
console.log(two);

// rest of operator
const[e,f,...g]=b;
console.log(g);

//spread (merge two array)
let num=[0,...b,7,8];
console.log(num);

//obj2 y is overrated the obj1 y
const obj1={x:3,y:5};
const obj2={y:6,z:4};
const spread={...obj1,...obj2};
console.log(spread);

//promise
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve('Resolved successfully');
        }else{
            reject('reject')
        }
    },2000)

});
console.log('Before promise execute');

promise.then((result)=>console.log(result))
.catch(err=>console.log(err))
.finally(()=>{console.log('Promise complted')})


console.log('After promise execution');


fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {data.map((user) => {console.log(user.name)})})
  .catch((err) => console.log(err));

  //asyn

  async function fetchApi(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
            const data=await response.json();
            data.map((user)=>{
                console.log(user.name)
            })
    }
    catch(error){
        console.log(error);
    }
  }
  fetchApi();

  //string literals
  let name='abi';
  let age=24;
  console.log(`I am ${name} and my age ${age}`);
