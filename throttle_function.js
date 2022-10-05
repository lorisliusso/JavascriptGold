/* Let's write a throttle function that takes in a required callback function and a required delay in milliseconds.

Calling throttle(callback, delay) should return a new "throttled" version of the callback function, 
which takes in the same parameters as the callback, and which, when executed, 
should call the callback function a maximum of one time per delay interval.

The first time the throttled function is called, the underlying callback should run immediately. 
If the throttled function is called again before the delay has passed,
the next call to the underlying callback should be scheduled for delay milliseconds after the last call to the callback. 
If the throttled function is called multiple times in a delay interval, the arguments from the last call should be used.

For example, repeatedly and continuously calling a throttled function which had a delay of 3000ms 
would call the underlying callback function exactly once every 3 seconds.

The underlying callback functions should have the THIS context of the throttled-function callers. */

function throttle(callback, delay){

    let timerID;
    let firstTimeExecution= true;
    let lastCalledTime= delay;

    return function(...args){

        let currentTime= Date.now()
        let canCallAgain= ((Date.now() - lastCalledTime)>= delay) ? true : false //if passed enough time, set to true
        let delayRemaining= delay - (Date.now() - lastCalledTime); //no matter if negative, it'll be called instantly in that case

    if (firstTimeExecution || canCallAgain){
        firstTimeExecution= false;
        lastCalledTime= currentTime;
        callback.apply(this, args);
    
    } else {
        //stop execution if not enough time is passed.
        clearTimeout(timerID);

        timerID= setTimeout(() => {
            lastCalledTime=Date.now();
            callback.apply(this, args);
    
        }, delayRemaining);

    }
    }

}

const hello= ()=> {console.log('Hello World!')}

const throttledHello= throttle(hello, 3000)

throttledHello() //execute immediately --> Hello World!
throttledHello() //stop execution (clearTimeout) since we call it again immediately after
throttledHello() //executed after delay since we don't have any other call after it --> Hello World! (after delay)