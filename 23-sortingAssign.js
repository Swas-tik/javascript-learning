const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]
console.log(`--------- Given Array------------`)
console.log(arrayRollNumbers)

console.log(`--------- Reverse the given array---------------`)
const arrayReverse = arrayRollNumbers.reverse()
console.log(arrayReverse)

console.log(`--------------Use sort() method without any custom changes-------------`)
const sortArray = arrayRollNumbers.sort()
console.log(sortArray)

console.log(`------------- sorting array using custom logic -------------`)
const ascending = sortArray.sort((a,b)=>{
  return a > b? 1 : -1
})
console.log(ascending)

console.log(`---------------- Greatest number from given array---------`)
const largest = arrayRollNumbers.reduce((current, largest)=>{
  return current > largest ? current : largest
}, arrayRollNumbers[0])
console.log(largest)

console.log(`---------------- Smallest number from given array---------`)
const smallest = arrayRollNumbers.reduce((current, smallest)=>{
  return current < smallest ? current : smallest
}, arrayRollNumbers[0])
console.log(smallest)

console.log(`------------ Remove duplicates from array ----------------`)

const duplicate = arrayRollNumbers.reduce()