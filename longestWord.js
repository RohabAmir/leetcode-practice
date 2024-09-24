// Program to find the longest word in a given string 
// let sentence = "The quick brown fox jumped over the lazy dog";
// Output: "jumped"

function findLongestWord(sentence){
    let result=sentence.split(" ")
    let longestWord ="";

    for(let i = 0; i<result.length; i++){
        if(result[i].length > longestWord.length){
            longestWord = result[i];
        }
    }
    return longestWord; 
}
// Example usage:
let sentence = "The quick brown fox jumped over the lazyyy Dog";
console.log(findLongestWord(sentence)); 