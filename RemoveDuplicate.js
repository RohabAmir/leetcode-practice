const removeDuplicate = function(arr){
    const seen = {};  // An object to store seen elements
    const uniqueArray = [];  // An array to store unique elements

    for(let i=0; i<arr.length; i++){
        let item = arr[i];
        if(!seen[item]){ // Check if the element has not been recorded in 'seen'
            uniqueArray.push(item); 
            seen[item] = true; // Mark this element as 'seen' in the object
        }
    }
    return uniqueArray;

}

// Example usage
const arr = ['a', 'a', 'b', 'c', 'c', 'c', 'd','d'];
const afterRemoval = removeDuplicate(arr);
console.log(afterRemoval);