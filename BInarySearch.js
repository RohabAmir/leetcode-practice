// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4


var search = function(nums, target) {
    //BinarySearchAlgo
    let min=0;
    let max=nums.length-1;
    //To get the midIndex of sorted array
    while(min<=max){
        let midIndex = Math.floor((min+max)/2);
        //To get right and left half of divided array
        if(nums[midIndex]===target){
            return midIndex;
        }
        if(nums[midIndex] < target){ 
            min = midIndex + 1;
        }else if(nums[midIndex] > target){
            max = midIndex - 1;
        }

    }

    return -1;

    
};