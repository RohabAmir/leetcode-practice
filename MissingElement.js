// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.


// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function(nums) {
    //Mark each numbers's corresponding index as negative
    for(let i=0; i<nums.length; i++){
        let index = Math.abs(nums[i]) - 1;
        if(nums[index] > 0){ //positive values 
            nums[index] = -nums[index];
        }
    }

    //collect the indexes that have positive values which correspond to missing number
    let result = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] > 0){ //positive values
            result.push(i+1);
        }
    }

    return result;

    
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));

