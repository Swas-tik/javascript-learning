const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19]
console.log(`------------- Given Array -----------------`)
console.log(arrayNumbers)

console.log(`--------- All the numbers greater than 50 in given array -----------`)
const greaterNumber = arrayNumbers.filter((item)=>{
  if(item > 50){
    return item
  }
})
console.log(greaterNumber)

console.log(`--------- All the even numbers present in given array -----------`)
const evenNum = arrayNumbers.filter((item)=>{
  if(item%2 == 0){
    return item
  }
})
console.log(evenNum)

console.log(`--------- Multiple of 5 ----------`)
const multiArr = arrayNumbers.filter((item)=>{
  if(item%5 == 0){
    return item
  }
})
console.log(multiArr)

console.log(`------------ All the number between 20 and 50 ----------`)
const inBetween = arrayNumbers.filter((item)=>{
  if(item > 20 && item < 50){
    return item
  }
})
console.log(inBetween)