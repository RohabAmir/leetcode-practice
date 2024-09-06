// I have an array such like : arr=['a','a',b',c','c','c'] write the js function in best optimal code suhc that we should make an obj from that array where key is the value of arary and value of obj is the occurances of value in that array such that:
// obj:{ "a":2, "b":1, "c":3 }


function countOccurrences(arr) {
    const result = {};  // Initialize an empty object to store the counts

    for (let i = 0; i < arr.length; i++) {  // Loop through the array
        const item = arr[i]; // get the fisrt element of array 
        result[item] = (result[item] || 0) + 1;
    }

    return result;  // Return the resulting object with counts
}

// Example usage
const arr = ['a', 'a', 'b', 'c', 'c', 'c','d'];
const occurrences = countOccurrences(arr);
console.log(occurrences);
