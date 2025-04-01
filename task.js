console.clear()

function isMonsterPalindrome(str) {
    return str === str.split("").reverse().join("") ? "Beware, a palindrome monster is near!" : "You are safe from palindrome monsters... for now."
}

console.log(isMonsterPalindrome("racecar"))
