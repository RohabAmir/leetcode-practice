/////////////////////////// Remove Duplicates from Sorted Array ///////////////////////////////////////////////////////////////////////////////////////

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


var removeDuplicates = function(nums) {
    //For the edge case
    if(nums.length===0){
        return 0;
    }
    // now initializing pointers 
    let length = 1; // it will count distinct elements
    let prev =  nums[0]; 
    let index = 1; //it will alter input array

    //checking for distinct elements by iterating the array 
    for(let i=1; i<nums.length; i++){
        if(nums[i] !== prev){ // -->> distinct element
            length +=1; 
            prev=nums[i];
            nums[index]=nums[i];
            index +=1;
        }
    }
    return length; // input array gets altered and it will give us the length
    
};

console.log(removeDuplicates([0, 0, 2, 2, 3, 3, 4]));