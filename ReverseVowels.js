// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

var reverseVowels=function(s){
    let arr=s.split(''); //convert to an array
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let left=0;
    let right=arr.length-1;

    while(left<right){
        if(vowels.includes(arr[left]) && vowels.includes(arr[right])){
            //swap
            [arr[left],arr[right]] = [arr[right],arr[left]];
            left++;
            right--;
        }else if(vowels.includes(arr[left])){
            right--;
        }else{
            left++;
        }

    }

    return arr.join(''); //back to string

};

// let string="leetcode"
// const VR= reverseVowels(string);
// console.log(VR);

