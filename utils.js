const promise= new Promise((res,rej) => setTimeout(()=> res(3)), 1000) 


console.log(promise)

setTimeout(() => {
    
    console.log(promise)
}, 2000);