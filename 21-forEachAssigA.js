const  arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601]
console.log(arrayNumbers)
console.log(`------- Array Elements with it's index-----------`)
arrayNumbers.forEach((element, index)=>{
  console.log(`element=> ${element}`, " "," ",`index=> ${index}`)
})

console.log(`------- Only positive element from given array -----------`)

arrayNumbers.forEach((element)=>{
  if(element > -1){
    console.log(element)
  }
})

console.log(`------------- Negative element add into the new array -------------- `)
const arrayNew =[] 
arrayNumbers.forEach((element)=>{
  if(element < 0){
    arrayNew.push(element)    
  }
})
console.log(arrayNew)

console.log(`------- Even Numbers from an given Array-------------`)
arrayNumbers.forEach((item)=>{
  if(item%2 == 0 && item > 0){
    console.log(item)
  }
})

console.log(`-------- Sum of all the given array numbers --------`)
let number =0;
arrayNumbers.forEach((item)=>{
  number += item
})
console.log(number)

console.log(`--------- Index value of all the even number of given array ----------`)
arrayNumbers.forEach((item, index)=>{
  if(item%2 ==0 && item> 0){
    console.log(index)
  }
})