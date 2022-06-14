// solution 1
function verificationPalindrome(string) {
  if (!string) return

  return string.split('').reverse().join('') === string
}

console.log(verificationPalindrome('level'))
