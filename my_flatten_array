/*
Let's implement a function flatten, that flattens arrays with arbitrary levels of nesting,
and recursively concatenates all arrays within it into an array containing only a single level. */

function flatten(array) {
    
    while(array.some(arr=> arr instanceof Array)){
        array= [].concat(...array)
    }
    return array
}