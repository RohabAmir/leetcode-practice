function findSecondLargest(arr) {
    
    if (arr.length < 2) { // edge case ->  Array must contain at least two elements
        console.log("Array must contain at least two elements.");
        return;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){ 
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i] > secondLargest && arr[i] < largest){
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -Infinity) { // edge case -> There is no second largest element (all elements are the same).
        console.log("There is no second largest element (all elements are the same).");
        return;
    }

    return secondLargest;
}

// Example usage
const numbers = [5, 7, 1, 3, 7, 8, 10, 20];
console.log("Second Largest:", findSecondLargest(numbers)); // Output should be 8
