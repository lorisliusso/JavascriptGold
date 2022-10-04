let timerID=null;
console.log('Timer 1', timerID)

 timerID= setTimeout(() => {
    console.log('Hello')
    
}, 3000);

console.log('Timer 2', timerID)

clearTimeout(timerID)

console.log('Timer 3', timerID)

setTimeout(() => {
    console.log('Timer 4', timerID)
}, 9000);