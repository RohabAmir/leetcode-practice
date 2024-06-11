
// Using Hashmaps 

var twoSum = function(nums,target) {

    let map = new Map();
    for(i=0; i<=nums.length; i++){
        let remaining = target - nums[i];
        if(map.has(remaining)){
            return[map.get(remaining),i];
        }
        map.set(nums[i],i)

    }
    return [];


    
}

console.log(twoSum([3,2,4], 6));