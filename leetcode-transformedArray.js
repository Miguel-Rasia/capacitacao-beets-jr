/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var transformed_array = []
    for (let i = 0; i < arr.length; i++) {
        transformed_array[i] = fn(arr[i], i)
    }
    return transformed_array
};