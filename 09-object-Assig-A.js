let professor = {
  fullname: "Sachin Mahakalkar",
  city:"Nagpur",
  age: "58",
  isMarried: true,
  email: 'sachin@gmail.com',
  university: 'Y.C.C.E',
  degree:{
    enginnering: "C.S.E",
    Master:"Software Engg.",
    PHD: "Adv Computing",

  },
  certificates: ['Hacker Rank', 'Certificate IFE course', 'Certificate in Adv. computing'],
}

console.log(professor)
console.log('==========Add new property Total Experience ===========')
professor.experience = '20 Years'

console.log(professor.experience)

console.log('=========== updated certificate =========')
professor.certificates.splice(2,0,"Oracle certificate")
console.log(professor.certificates)


console.log('=========== modified existing property (age) =========')
professor.age = '59'
console.log(professor)

console.log('=========== Last element of array certificate =========')
console.log(professor.certificates[professor.certificates.length-1])

console.log('=========== Tarverse the array use forof loop =========')
for (const element of professor.certificates) {
  console.log(element)
}
