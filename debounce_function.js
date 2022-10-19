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



function throttle(callback, delay) {


    let timerID;
    let LastCall=0;
    
    
    const throttledFunction= function(...args){
    
        const ActualTime= Date.now()
        const SecondsPassed= ActualTime - LastCall
        const delayRemaining= delay-SecondsPassed
    
    
        if (delayRemaining <=0){
           LastCall=ActualTime
           callback.apply(this,args)
           }
    
    
       else{
    
    
     clearTimeout(timerID);
    
         timerID= setTimeout(()=>{
    
         
           lastCall= Date.now()
           callback.apply(this,args);
    
    
          }, delayRemaining)
       }
    
    
    }
    
    throttledFunction.cancel= function(){clearTimeout(timerID)}
    
    return throttledFunction;
    
    
    
    
    }


    function throttle(callback, delay) {


        let timerID;
        let lastCall=0;
        
        return function(...args){
        
            const currentTime= Date.now()
            const timePassed= currentTime - lastCall
            const delayRemaining= timePassed - delay
        
        
           if (delayRemaining <=0){
              lastCall= Date.now()
              callback.apply(this,args)
          }
        
          else{
        
           clearTimeout(timerID)
        
            timerID= setTimeout(()=>{
        
            lastCall=Date.now()
            callback.apply(this, args)
        
        
        }, delayRemaining)
        
        
        
        }
        
        
        
        
        
        }
        
        
        
        
        
        
        }





        function curry(callback) {


            return function CurriedCallback(...args){
           
              if(args.length===0){
              
               return callback()  
           
           }
           
           
              else{
           
           return function(...otherArgs){
           
           
             if(otherArgs.length===0){
           
           return callback()}
           
            else{
           
           return CurriedCallback(...args, ...otherArgs)}
           
           }
           
           
              
           
           
           
           
           
           }
           
             
           
           
           
           
           
           }
           
           }
           