let array = [10, 20, 45, 30, 77, 60]
console.log(array)
console.log(`Even numbers present in a given array`)
let countEven = 0;
for (const evenChar of array) {
  if(evenChar%2 ==0){
    countEven ++;
  }
}
console.log(countEven)

const word = 'I Love only JavaScript'
const vowels = 'aeiou'
let vowelCount = 0;
for (const wordChar of word) {
for(const vowelChar of vowels){
  if(wordChar.toLowerCase()==vowelChar){
    vowelCount++
  }
} 
}
console.log('Vowels count in given string')
console.log(vowelCount)

const sentence = "JavaScript LANGUAGE"
let charCount = 0;
for (const char of sentence) {
  if(char.toLowerCase()=='a'){
    charCount++
  }
}
console.log(`Count of 'a' character in a given string`)
console.log(charCount)