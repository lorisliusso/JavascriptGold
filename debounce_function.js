/* Let's create debounce function that takes in a required callback function, a required delay in milliseconds, 
and an optional immediate boolean, which defaults to false.

Calling debounce(callback, delay) should return a new "debounced" version of the callback function,
 which takes in the same parameters as the callback, and which, when executed, should call the callback after delay 
 milliseconds have passed since the last call to this debounced function.
 
 The underlying callback functions should have the this context of the debounced-function callers (We can use .apply or .call).
 */

 function debounce(callback, delay, immediate = false) {

    let timerID;
    
    return function (...args){

    clearTimeout(timerID)
    let canCallAgain= timerID==null && immediate;

    if(canCallAgain){
     callback.apply(this,args);
    }

    timerID= setTimeout(()=>{

    if(!immediate){
      callback.apply(this,args);
      }

    timerID=null;
          }, delay)

}
}