/*
We'll write a curry function that takes in a required callback function and returns a curried version of that function. 

This callback function can take in any number of arguments, including none at all.

If the curried function is called with arguments, it should return a new function, which can be called with more arguments, to be passed to the underlying callback.

If the curried function (or one of the returned new functions) is called with no arguments, 
this should be considered the end of the curried function calls, 
and the callback should be called with every argument that was passed, in the correct order.

Sample usage:

const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);
const curriedSum = curry(sum);

curriedSum(); // 0
curriedSum(1)(); // 1
curriedSum(1)(2)(); // 3
curriedSum(1, 2)(3)(4, 5, 6)(); // 21
curriedSum(1); // [Function]
curriedSum(1, 2)(3); // [Function]

*/

function curry(callback){

    return function curriedCallBack(...args){
        // CASES: 
    
        // 1. NO ARGUMENTS:
        if (args.length===0){
            return callback()
        }

        // 2. 1 OR MORE ARGUMENTS:
        else{//return another function and check it again:

            return function(...otherArgs){
                if(otherArgs.length===0){
                    return callback(...args)
                }
                //else (recursion)
                return curriedCallBack(...args, ...otherArgs)
            }
        }
    }
}

//Let's test it:

//Create a sum function:
const sum= (...args) => args.reduce((acc, current) => acc + current); 
console.log(sum(1,2,3)) // 6

//Create curriedSum:
const curriedSum= curry(sum)
console.log(curriedSum(1)(2)(3)()) // 6
console.log(curriedSum(1)(2)(3)()) // [Function (anonymous)]