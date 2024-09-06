// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.


// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //Initialing two pointer at start and end 
    let left = 0;
    let right = s.length-1;

    while(left<right){
        //swapping character at right and left indices
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        //Move towards middle
        left++;
        right--;
    }
    
};