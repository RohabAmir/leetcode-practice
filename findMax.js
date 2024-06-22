const findMax = function(arr){
    if(arr.length===0){ //edge case
        return undefined;
    }
    let max=arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

// Example usage
const arr = [1,8,30,40,42];
const MaximumInArray = findMax(arr);
console.log(MaximumInArray);