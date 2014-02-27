function fibonacciSet(max) {
    var fibArray = [1];
    var currentFib = 1;
    while (currentFib < max) {
        fibArray.push(currentFib);
        currentFib += fibArray[fibArray.length - 2];
    }
    return fibArray;
}

function even(n) {
    return n % 2 === 0;
}

function sum(stuff) {
    var total = 0;
    for (i = 0; i < stuff.length; i++){
        total += stuff[i];
    }
    return total;
}

function filter(filterFunc, things) {
    var filteredList = [];
    for (i = 0; i < things.length; i++) {
        if (filterFunc(things[i]) === true) {
            filteredList.push(things[i]);
        }
    }
    return filteredList;
}


console.log(sum(filter(even, fibonacciSet(4000000))));