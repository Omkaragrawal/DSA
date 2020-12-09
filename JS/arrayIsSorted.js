const isSorted = (arr = []) => {
    if (!Array.isArray(arr)) return false;

    if (arr.length < 3) return true;

    return isAscending(arr, isDescending);
};

const isAscending = (arr = [], ifFalse = undefined) => {
    if (!Array.isArray(arr)) return false;

    if (arr.length < 2) return true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            if (ifFalse && ifFalse.constructor === Function) return ifFalse(arr);
            return false
        }
    }

    return true;
};

const isDescending = (arr = [], ifFalse = undefined) => {

    if (!Array.isArray(arr)) return false;

    if (arr.length < 2) return true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            if (ifFalse && ifFalse.constructor === Function) return ifFalse(arr);
            return false
        }
    }

    return true;
};
console.group("isSorted");
// isSorted
// True
console.group("True");
console.log(isSorted([]));
console.log(isSorted([42]));
console.log(isSorted([39, 42]));
console.log(isSorted([42, 39]));
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 4, 3, 2, 1]));
console.groupEnd("True");
// False
console.group("False");
console.log(isSorted([1, 2, 4, 3, 5]));
console.log(isSorted([1, 3, 2, 4, 5]));
console.groupEnd("False");
console.groupEnd("isSorted");


console.group("isAscending");
// isAscending
// True
console.group("True");
console.log(isAscending([]));
console.log(isAscending([42]));
console.log(isAscending([39, 42]));
console.log(isAscending([1, 2, 3, 4, 5]));
console.groupEnd("True");
// False
console.group("False");
console.log(isAscending([42, 39]));
console.log(isAscending([5, 4, 3, 2, 1]));
console.log(isAscending([1, 2, 4, 3, 5]));
console.log(isAscending([1, 3, 2, 4, 5]));
console.groupEnd("False");
console.groupEnd("isAscending");



console.group("isDescending");
// isDescending
// False
console.group("False");
console.log(isDescending([39, 42]));
console.log(isDescending([1, 2, 3, 4, 5]));
console.log(isDescending([1, 3, 2, 4, 5]));
console.log(isDescending([1, 2, 4, 3, 5]));
console.groupEnd("False");
// True
console.group("True");
console.log(isDescending([]));
console.log(isDescending([42]));
console.log(isDescending([42, 39]));
console.log(isDescending([5, 4, 3, 2, 1]));
console.groupEnd("True");
console.groupEnd("isDescending");