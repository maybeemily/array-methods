function map(array, callback) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array.hasOwnProperty(i)) {
            newArray[i] = callback(array[i]);
        }
    }
    return newArray;
}

function filter(array, callback) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            newArray = [...newArray, array[i]];
        }
    }
    return newArray;
}

function findIndex(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(array.hasOwnProperty(i)) {
            if(callback(array[i])) {
                return i;
            }
        }
    }
    return -1;
}

function reduce(array, callback, initialValue) {
    let accumulator = null;
    let start = null;

    if(initialValue){
        accumulator = initialValue;
        start = 0;
    }
    else {
        accumulator = array[0];
        start = 1;
    }

    for(let i = start; i < array.length; i++){
        if(array.hasOwnProperty(i)) {
            accumulator = callback(accumulator, array[i]);
        }
    }
    return accumulator;
}

function every(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(array.hasOwnProperty(i)) {
            if(!callback(array[i])) {
                return false;
            }
        }
    }
    return true;
}

function forEach(array, callback) {
    let closureVar = null;
    for(let i = 0; i < array.length; i++) {
        if(array.hasOwnProperty(i)) {
            closureVar = array[i]; 
        }
        else if(!array.hasOwnProperty(i)) {
            closureVar = undefined;
        }
        callback(closureVar);
    }
}

module.exports = { 
    map, 
    filter,
    findIndex,
    reduce,
    every,
    forEach
};
