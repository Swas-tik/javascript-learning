const employeeInfo = `
  {
  "name": "Aleix Melon",
  "id": "E00245",
  "role": ["Dev", "DBA"],
  "age": 23,
  "doj": "11-12-2019",
  "married": false,
  "address": {
    "street": "32, Laham St.",
    "city": "Innsbruck",
    "country": "Austria"
    },
  "referred-by": "E0012"
}
`;

const obj = JSON.parse(employeeInfo)
console.log('==========Employee Info============')
console.log(obj)
console.log(`-------Employee Role-------`)
console.log(obj.role[0])
const fullname = obj.name
const nameArray = (fullname.split(' '))
console.log('------Last Name-------')
console.log(nameArray[1])

const doj = obj.doj.split('-')
console.log('------Joining Year-------')
console.log(doj[2])