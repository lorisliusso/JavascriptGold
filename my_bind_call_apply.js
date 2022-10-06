/* This Binding:

Without calling Function.prototype.call, Function.prototype.apply or Function.prototype.bind, 
let's implement the following three similar functions on the Function prototype:

myCall(thisContext, ...args)

myCall should call the original function with thisContext bound to the function's this keyword,
 passing all of the remaining args as individual arguments to the function.
The return value of the original function should be returned by myCall.

myApply(thisContext, args)

myApply should call the original function with thisContext bound to the function's this keyword,
 passing all of the values in the args array as individual arguments to the function.
The return value of the original function should be returned by myApply.

myBind(thisContext, ...args)

myBind should return a new function that calls the original function with thisContext bound to the function's this keyword,
passing all of the remaining args as individual arguments to the function. The new function should accept optional arguments,
which should also be passed to the original function, after the args originally passed to myBind.
The new function should return the return value of the original function.

We can assume that the thisContext argument passed to each function will always be an object.
When binding this object to the this keyword, the original object should be bound, not a clone.
We can also assume that the original function will be declared using standard function syntax (i.e., it won't be an arrow function).

We should minimize side-effects as much as possible, ensuring that thisContext remains unchanged 
after calls to these functions and ensuring that standard iteration through properties on thisContext works normally.

*/

Function.prototype.myCall = function (thisContext, ...args) {
    //to avoid overwriting object keys:
      const symbol= Symbol();
    //let's save the function inside the object as object method 
    //(doing that the "this" will be the object itself then):
      thisContext[symbol]= this; 
       const returnValue= thisContext[symbol](...args)
       //delete object(thisContext) key after we've done with that
      //(we've already saved the result of the function)
       delete thisContext[symbol]
       //let's return in the end the value returned by the function called
       return returnValue
    };

    Function.prototype.myApply = function (thisContext, args = []) {
      return this.myCall(thisContext, ...args);
    };

    Function.prototype.myBind = function (thisContext, ...args) {
      return (...newArgs)=> this.myApply(thisContext, [...args, ...newArgs])
    };
    

///Let's test them:

const obj= {
    FirstName:'Loris',
    LastName:'Liusso',
}

function hello(emoji){
    console.log(`Hello ${this.FirstName} ${this.LastName} ${emoji}!`)
}

hello.myCall(obj, ':)')