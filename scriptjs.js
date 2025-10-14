const mul=(a,b)=>{
    return a*b;
  }

  const square=(n)=>{
    return mul(n,n);
  }

  const print =(n)=>{
    let s=square(n);
    console.log(s);
  }
  print(4);

//event loop
  console.log('first');
  Promise.resolve().then(console.log('from promises'))
setTimeout(()=>{
    console.log('Inside timeout');
},2000);
console.log('Last');