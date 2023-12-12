const inputText = document.querySelector('.txt')
const button = document.getElementById('btn')
const output = document.getElementById('output')

function removeWhitespace(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result += str[i];
    }
  }
  return result
}

function revereString (word) {

  let reverseWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i]
  }
  return reverseWord
}

button.addEventListener('click', function () {
  const word = removeWhitespace(inputText.value)

  const reverseWord = revereString(word)

  if (word.toLowerCase() === reverseWord.toLowerCase()) {
    output.innerText = "'" + word + "' is a palindrome \u2705"
  } else {
    output.innerText = "'" + word + "' is not a palindrome\u274C"
  }
})
