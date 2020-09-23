/*You are given an array of integers and asked to find the maximum value.*/
/*keeping track of the current maximum value as you work your way through the array, and change it if you come across a greater value:*/
function max(array) {
    if (array.length === 0) {
        return null;
    }

    let currentMax = array[0];
    for (let i = 1; i < array.length; i++) {
        const item = array[i];
        if (item > currentMax) {
            currentMax = item;
        }
    }
    return currentMax;
};
/*you only work through the array 1 time, this has an O(n) best, average and worst case.*/
