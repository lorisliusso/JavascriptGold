/*Without calling Array.prototype.map(), Array.prototype.filter(), Array.prototype.reduce(),
we'll implement the following three similar functions on the Array prototype: */

//MY MAP
Array.prototype.myMap= function(callback){
    const newArray= [];
    for (let i=0; i<this.length; i++){
        newArray.push(callback(this[i]))
    }
    return newArray;
}

// MY FILTER
Array.prototype.myFilter= function(callback){
    const newArray= [];
    for (let i=0; i<this.length; i++){
        if (callback(this[i]) === true){
        newArray.push(this[i])
     }
    }
    return newArray;
}

// MY REDUCE
Array.prototype.myReduce= function(callback, initialValue){
    let accumulator= initialValue;
    for ([index,element] of this.entries()){
        if (index===0 && initialValue=== undefined){
            accumulator= element;
        } else {
            accumulator= callback(accumulator,element)
        }
     }
    return accumulator;
}