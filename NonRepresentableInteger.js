// Write a function that prints the least integer what is not present in a given list and cannot be represented by the summation of the sub-element of the list.

// For example:
// For a=[1,2,5,7] the least integer not represented by the list or slice of the list is "4" and if a=[1,2,2,5,7] then least non-representable integer is "18". 

//Greedy Algorithm


function findSmallestNonRepresentableInteger(arr){
    //sort the array first
    arr.sort((a,b)=> a-b);
    
    let res = 1; //start with the smallest non-representable integer

    //Traverse the sorted array
    for(let i=0; i<arr.length; i++){
        //if the element is greater then 'res' than 'res' is the smallest non-representable integer
        if(arr[i] > res){
            return res;
        }
        //update 'res' to include current element in possible sums
        res += arr[i];
    }

    return res;
}

const arr=[1,2,2,5,7];
const smallestInteger= findSmallestNonRepresentableInteger(arr);
console.log(smallestInteger);