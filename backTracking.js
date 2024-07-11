// Given an integer list and a target  number , create a program to recursively find all the combinations of number in the list that sum up to the target number.

// Example:
// Input:
// list([3,9,8,4,5,7,10],15)

// Output:
// sum([3,8,4])=15
// sum([3,5,7])=15
// sum([8,7])=15
// sum([5,10])=15

function findCombinationsUtil(arr,target,index,currentSum,result){
    //Base Case: if current sum is equal to target, add curent sum combinations to result
    if( currentSum === target){
        console.log(`sum([${result.join(',')}])=${target}`);
        return;
    }
    //if current sum exceeds target or we have gone beyond array length
    if( currentSum > target || index >= arr.length){
        return;
    }
    //include the current element in the combination and recurse 
    result.push(arr[index]);
    findCombinationsUtil(arr,target,index+1,currentSum + arr[index],result);

    //Backtrack: exclude the current element from the combination and recurse.
    result.pop();
    findCombinationsUtil(arr,target,index+1,currentSum,result);
}

function findCombinations(arr,target){
    let result=[];
    findCombinationsUtil(arr,target,0,0,result);
}

const arr = [3,9,8,4,5,7,10];
const target = 15;
console.log(findCombinations(arr,target));