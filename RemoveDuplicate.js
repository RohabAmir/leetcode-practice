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
const arr = [1, 2, 1, 3, 4, 2, 2, 1, 5, 6];
const afterRemoval = removeDuplicate(arr);
console.log(afterRemoval);

// function removeDuplicatesWay2(arr) {
//     // Use the Set object to remove duplicates. 
//     // This works because Sets only store unique values
//     // return Array.from(new Set(arr));
//     // return [...new Set(arr)] => another way
//   }
  
//   console.log(removeDuplicatesWay2([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]));
  
  // -------------------------- (or)----------------------------- //
  
//   const removeDuplicatesWay1 = (array) => {
//     let uniqueArr = [];
  
//     for (let i = 0; i <array.length; i++) {
//       if (uniqueArr.indexOf(array[i]) == -1) {
//         uniqueArr.push(array[i]);
//       }
//     }
  
//     return uniqueArr;
//   };
  
//   console.log(removeDuplicatesWay1([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]));