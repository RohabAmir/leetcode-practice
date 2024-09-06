// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


var isAnagram = function(s, t) {
    // 1. Check the length of both strings 
    if(s.length !== t.length){
        return false;
    }
    // 2.Count the letters of string1 and add in a map of key value pairs 
    let counter = {};
    for(let letter of s){
        counter[letter] = (counter[letter] || 0) + 1;
    }
    // 3.Compare the counter map with string2 and subtract till all the values in map goes to zero. 
    for(let items of t){
        if(!counter[items]){
            return false; // if any letter in string 2 which is not in str1
        }
        counter[items] -= 1;
    }

    return true;

};

console.log(isAnagram("hello","llleo"));