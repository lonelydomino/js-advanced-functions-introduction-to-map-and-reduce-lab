// Your code here

function mapToNegativize(arr) {
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * -1
    }
    return arr
}
function mapToNoChange(arr) {
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * -1
    }
    return arr
}
function mapToDouble(arr) {
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2
    }
    return arr
}
function mapToSquare(arr) {
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i] 
    }
    return arr
}
function reduceToTotal(arr, start=0) {
    let total = start;

    for(var i = 0; i < arr.length; i++){
        total += arr[i] 
    }
    return total
}
function reduceToAllTrue(arr) {
    let val = true
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === false){
            val = false;
        }
    }
    return val
}
function reduceToAnyTrue(arr) {
    let val = false
    for(var i = 0; i < arr.length; i++){
        if (arr[i] == true){
            val = true;
        }
    }
    return val
}
