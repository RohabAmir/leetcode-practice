//Sorting mechanism O(nlogn)

function selectionSort(arr){
    let n = arr.length; //length of unsorted array
    for(let i=0; i<n-1; i++){
        //find minium elememt in unsorted array
        let minIndex=i;
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex=j;
            }
        }
        //Swap the found min element with first element
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr; // Return the sorted array
}

const arr=[50,30,40,10,20,60,5];
const sort = selectionSort(arr);
console.log(sort);