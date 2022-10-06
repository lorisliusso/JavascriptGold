/*
Let's Write a promisify function (similar to the util.promisify Node.js function) 
that takes in a required callback function and returns a new "promisifed" version of that function.

The callback function can take in any number of parameters, but its last parameter 
is guaranteed to be another callback function, which takes in two parameters: 
an error and a value. We'll call this other callback function handleErrorAndValue for simplicity.
*/

function promisify(callback) {

    return function (...args) {

        return new Promise((resolve, reject) => {
            
            function handleErrorAndValue(error, value) {
                if (error == null) {
                    resolve(value);
                } else {
                    reject(error);
                }
            }
            callback.call(this, ...args, handleErrorAndValue);
        });
    };
   }


//Let's test it:

function adder(x, y, handleErrorAndValue) {
    const value = x + y;
    if (typeof value !== 'number') {
      const error = new Error('Not a number');
      handleErrorAndValue(error, null);
    } else {
      handleErrorAndValue(null, value);
    }
  }


const promisifiedAdder = promisify(adder);

  promisifiedAdder(1, 2)
    .then(console.log) // This would log 3.
    .catch(console.error);
  
  promisifiedAdder(1, "foobar")
    .then(console.log)
    .catch(console.error); // An error would be caught and logged.