//solution 1
function verificationPalindrome(string) {
  if (!string) return 'non-existent string'

  return string.split('').reverse().join('') === string
}

// console.log(verificationPalindrome('level'))

// solution 2

function verificationPalindrome2(string) {
  if (!string) return 'non-existent string'

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(verificationPalindrome2('level'))
