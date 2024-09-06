// Given Three integer ararys sorted in acsending order return the smallest number that is common in all three ararys. Return -1 if no common element found.
 const FindSmallestCommomNumber = function(arr1,arr2,arr3){

    let ptr1=0, ptr2=0, ptr3=0;
    
    while(ptr1 < arr1.length && ptr2 < arr2.length && ptr3 < arr3.length){

        if(arr1[ptr1] === arr2[ptr2] && arr2[ptr2] === arr3[ptr3]){
            return arr1[ptr1];
        }
    

    let min = Math.min(arr1[ptr1], arr2[ptr2], arr3[ptr3]); //Increment pointers for the array with the smallest value

    if(arr1[ptr1]===min) ptr1++;
    if(arr2[ptr2]===min) ptr2++;
    if(arr3[ptr3]===min) ptr3++;

    }

    return -1;

 }

 //test case 
 const array1 = [1,5,10,20,40,80];
 const array2 = [6,7,20,80,100];
 const array3 = [3,4,15,20,30,70,80,120];



console.log(FindSmallestCommomNumber(array1,array2,array3));