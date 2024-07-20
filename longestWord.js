// Program to find the longest word in a given string 
// let sentence = "The quick brown fox jumped over the lazy dog";
// Output: "jumped"

function findLongestWord(sentence){
    let currentWord ="";
    let longestWord ="";

    for(let i = 0; i<= sentence.length; i++){
        if(i<sentence.length && sentence[i] !== " "){
            currentWord += sentence[i];
        }else{
            if(currentWord.length > longestWord.length){
                longestWord = currentWord ;
            }
            currentWord = "";
        }

    }
    return longestWord; 
}
// Example usage:
let sentence = "The quick brown fox jumped over the lazy dog";
console.log(findLongestWord(sentence)); 