//Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    if(strs.length ===0){
        return ""
    }
    strs.sort()
    const firstWord = strs[0]
    const lastWord = strs[strs.length-1]
    const commonPrefix = ""

    for(let i =0; i<Math.min(firstWord, lastWord); i++){
        if(firstWord[i]===lastWord[i]){
            commonPrefix+=firstWord [i]
        }else{
            return ""
        }
    }
    
};