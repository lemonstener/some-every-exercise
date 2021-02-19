function hasOddNumber(arr) {
    return arr.some(function (n) {
        return n % 2 !== 0;
    })
}


function hasAZero(num) {
    const str = num.toString();
    if (str.indexOf('0') !== -1) {
        return true;
    }
    return false;
}


function hasOnlyOddNumbers(arr) {
    return arr.every(function (n) {
        return n % 2 !== 0
    })
}


function hasNoDuplicates(arr) {
    return arr.every(function (n) {
        return arr.indexOf(n) === arr.lastIndexOf(n);
    })
}


function hasCertainKey(arr, key) {
    return arr.every(function (el) {
        return key in el;
    })
}


function hasCertainValue(arr, key, searchValue) {
    return arr.every(function (el) {
        return el[key] === searchValue;
    })
}
