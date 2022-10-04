/*Without calling Array.prototype.map(), Array.prototype.filter(), Array.prototype.reduce(),
we'll implement the following three similar functions on the Array prototype: */

//MY MAP
Array.prototype.myMap= function (callback){
    const newArray= [];
    for (i=0; i<this.length; i++){
        newArray.push(callback(this[i]))
    }
    return newArray;
}
