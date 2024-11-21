const arrayNumber = [20,11,40,25,23,11,9,31,60,2,19]
console.log('-------Given Array----------')
console.log(arrayNumber)

console.log(`--------- Adding 10 to each given array number ----------`)
const adding = arrayNumber.map((element)=>{
 return element + 10
})
console.log(adding)

console.log(`----------- Cube of eacg given array number --------------`)
const cube = arrayNumber.map((element)=>{
  return element *element*element
})
console.log(cube)

console.log(`-------- Adding index value to each number of given array -----------`)
const addIndex = arrayNumber.map((element,index)=>{
  return element + index
})
console.log(addIndex)