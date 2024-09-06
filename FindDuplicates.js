// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []

/**
 * @param {number[]} nums
 * @return {number[]}
 */


//**************for sorted arrayy */

var findDuplicates = function(nums) {
    if(nums.length === 1){
        return [];
    }
    let seen = {};
    let duplicates = [];

    for(let i=0; i<nums.length; i++){
        let item=nums[i];
        if(!seen[item]){
            seen[item]=true; //add a true flap if not present in the object
        }else{
            duplicates.push(item);
        }
    }
    return duplicates;
    
};

console.log(findDuplicates([0, 0, 2, 2, 3, 3, 4]));


//**************for unsorted arrayy */

var findDuplicates = function(nums) {
  let duplicates = [];

  for (let i = 0; i < nums.length; i++) { //iterating through the input array and computing the index by math.abs . this gives zero-based index
      let index = Math.abs(nums[i]) - 1;

      // Check if the number at this index is negative this means that its is visted (duplicate number)
      if (nums[index] < 0) {
          duplicates.push(index + 1);
      } else {
          // Negate the number at this index
          nums[index] = -nums[index];
      }
  }

  return duplicates;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); 




