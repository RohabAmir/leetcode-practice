// Given a nested array arr, where each element can be either an integer or another array (which can also contain integers or other arrays),
//  your task is to flatten the array into a single-dimensional array.

// Using Stack DS

function flattenArray(arr) {
    let result = []; //resulting flatten array
    const stack = [...arr]; // This creates a shallow copy of the input array arr and assigns it to stack.

    while(stack.length){
        const next = stack.pop(); //This removes the last element from the stack and stores it in the variable next (LIFO),
        if(Array.isArray(next)){//If next is an array, it spreads the elements of next using the spread operator ... and pushes them back onto the stack. This effectively "flattens" one level of nesting by breaking the array into its elements and adding them to the stack.
            stack.push(...next); //[7,5] =>>>> 5,7
        }else{
            result.push(next); //[6,5,7,4,3,2,1]
        }
    }

    return result.reverse(); // Reverse the result to maintain original order
}


//Using Built in method (Reduce)

// function flattenArray(arr) {
//     return arr.reduce((acc, item) => (
//         Array.isArray(item) ? [...acc, ...flattenArray(item)] : [...acc, item]
//     ), []);
// }

// Example usage:
const nestedArray = [1, [2, [3, 4], [7,5]], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);