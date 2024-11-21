//Palindrom

function palindrom(word){
  console.log(`Given word is '${word}'`)
  let inputWord = word.toLowerCase()
  const reverseWord = word.split('').reverse().join('')
  const result = reverseWord.toLowerCase()
  return result == inputWord ? 'is palindrom' : 'Not a palindrom'
}
console.log(`--------------Palindrom-----------------`)
console.log(palindrom('Madam'))
console.log(`-------------------------------`)
console.log(palindrom('Dad'))
console.log(`-------------------------------`)
console.log(palindrom('Hello'))


//Anagram
console.log('-----------------------------------------------------')


function anagram(word1,word2){

word1 = word1.toLowerCase()
word2 = word2.toLowerCase()
 
const str1 = word1.split('').sort().join('')
const str2 = word2.split('').sort().join('')

return str1 == str2 ? `Given words (${word1}, ${word2}) are 'Anagram' of each other` : `Given words (${word1}, ${word2})  are 'not Anagram' of each other`
}
console.log(`-----------------Anagram-----------------`)
const result1 = (anagram('Silent','listen'))
console.log(result1)

console.log(`-----------------------------------------`)
const result2 = (anagram('Hello','World'))
console.log(result2)

console.log(`-------------------------------------------`)
const result3 = (anagram('Such','Much'))
console.log(result3)

