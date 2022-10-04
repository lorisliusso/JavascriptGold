/* Let's create debounce function that takes in a required callback function, a required delay in milliseconds, 
and an optional immediate boolean, which defaults to false.

Calling debounce(callback, delay) should return a new "debounced" version of the callback function,
 which takes in the same parameters as the callback, and which, when executed, should call the callback after delay 
 milliseconds have passed since the last call to this debounced function.
 
 The underlying callback functions should have the this context of the debounced-function callers (We can use .apply or .call).
 */

function debounce(callback, delay){

    let timerID;

    return function(immediate=false, ...args){
        //if called again and wait time is not elapsed, block current execution and set a new one.
        clearTimeout(timerID)
        //if we want immediate execution or the wait time is elapsed:
        if (immediate===true || timerID === null){
            console.log('Immediate execution') //OPTIONAL: just to check execution
            callback.apply(this,args)
        }
        //else execute our callback function with delay
        else{
            console.log('Wait time!') //OPTIONAL: just to check execution
            timerID= setTimeout(()=>{
                callback.apply(this, args)
                timerID= null;
            }, delay)

        }
    }
}

//Let's test it:

function hello(){
    console.log('Hello World')
}

const debouncedHello= debounce(hello, 3000)

debouncedHello(immediate=true)
debouncedHello()
debouncedHello()