console.log(`--------------Arrow Function with no args and no return value----------------`)
let arrowFunction = ()=>{
  console.log(`Good Morning, Today is Tuesday`)
}
arrowFunction()
console.log(`--------------Arrow Function with 3 args, Multiplication----------------`)
let multiplication = (n1,n2,n3)=>{
  console.log(`Multiplication of ${n1},${n2},${n3} =`, n1*n2*n3, `${n3 == 1 ? 'assigned default value to 3rd arg of 1':''}`)
}
multiplication(5,5,2)
multiplication(10,4,n3=1)

console.log(`--------------Arrow Function with 5 args and return value, Addition----------------`)
let addition = (a1,a2,a3,a4,a5)=>{
  let result = a1+a2+a3+a4+a5
  return result
}

let add = addition(100,100,200,349,756)
console.log(`Addition of (100,100,200,349,756) is =`, add)

let stringAdd = addition("I am", " learning", " ES6", " features", " in depth")
console.log(`string formed after adding = `, stringAdd)