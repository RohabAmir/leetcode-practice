// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function(nums) {
    // you can use a hash map (object) to track the frequency of each element as you iterate through the array.
    let freq={};
    //iterate through the length of array
    for(let i=0; i<nums.length;i++){
        let item = nums[i];
        // if item is not in the map add an true flag
        if(!freq[item]){
            freq[item]=true;
        }else{
            // return true if there is duplicate in map
            return true;
        }
    } 
      // If no duplicates found, return false
    return false;
    
};


