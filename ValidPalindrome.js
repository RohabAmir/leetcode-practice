//**************Palindrome String******************************//
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    // converting all uppercase characters to lower case
    s=s.toLowerCase();
    //removing all non-aplhanumeric characters 
    s=s.replace(/[^a-z0-9]/g,'');
    //checking if palindrome using two pointers technique 
    let left=0;
    let right=s.length-1;

    if(s.length>0){
        while(left<right){
            if(s[left] !== s[right]){
                return false;
            }
            left++;
            right--;
        }
    } 
    return true;   
};
