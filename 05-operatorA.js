function squareOfWordLength(word){
var wordLength = word.length
console.log(`Given word is ${word} and its length is ${wordLength}`)
var result = wordLength * wordLength
return result
}
var givenWord1 =squareOfWordLength("JavaScript")
console.log(`Square of length of given word is ${givenWord1}`)
console.log('----------------------------------------------')

var givenWord2 =squareOfWordLength("Google Chrome")
console.log(`Square of length of given word is ${givenWord2}`)
console.log('----------------------------------------------')

var givenWord3 =squareOfWordLength("Web Developer Smart")
console.log(`Square of length of given word is ${givenWord3}`)
console.log('----------------------------------------------')


function stringFun(givenString){
var stringLength= givenString.length
console.log(`Length of given string is ${stringLength}`)
var stringArray = givenString.split(' ')
var arrayLength = stringArray.length
console.log(`Total number of words in string ${arrayLength}`)
var resultDivide= stringLength / arrayLength
console.log(`Total length of given string is divided by total number of words is ${resultDivide}`)
var resultMultiply = stringLength * arrayLength
console.log(`Total length of given string is multiply by total number of words is ${resultMultiply}`)


}
stringFun("I am Angular Developer")