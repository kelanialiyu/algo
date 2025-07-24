// Given a string s, return the longest palindromic substring in s.
//
//
//
//     Example 1:
//
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
//     Example 2:
//
// Input: s = "cbbd"
// Output: "bb"
//
//
// Constraints:
//
//     1 <= s.length <= 1000
// s consist of only digits and English letters.

const isPalindrome = str => str === str.split('').reverse().join('');
const longestPalindrome_ = s=>{
    let longest = s.charAt(0)
    let currentSub =""
    for(let i = 0; i<s.length-1; i++ ){
        for(let j = i+1; j<s.length; j++ ){
            currentSub = s.substring(i, j+1)
            if(currentSub.length > longest.length && isPalindrome(currentSub)){
                longest = currentSub
            }
        }
    }
    return longest
}


// using expand from center, it takes each char of a string or spaces in btw(uses even chars) and generates the longest substring starting from it, at the end of the day, the answer is that with the longest substring this eliminates the need of a separate isPalindrome fxn


// this pick a character and tries to create a palindrome by expanding it, adding 2 characters to it if they are equal
const expandFromCenter = (start, end, string) => {
    while(start >=0&& end <string.length && string.charAt(start) ===string.charAt(end)){
        start--
        end++
    }
    return string.substring(start+1, end)
}
/*Winner 👑*/
const longestPalindrome = s=>{
    let longest = s.charAt(0)
    let odd =""
    let even =""
    for(let i = 0; i<s.length-1; i++ ){
        odd = expandFromCenter(i,i,s)
        even = expandFromCenter(i,i+1,s)
        longest = longest.length > odd.length? longest : odd
        longest = longest.length > even.length? longest : even
    }
    return longest
}

console.log(longestPalindrome(""))