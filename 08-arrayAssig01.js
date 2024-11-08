const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruits_seasonal)
console.log(`First Element : ${fruits_seasonal[0]} `)
console.log(`Last Element : ${fruits_seasonal[fruits_seasonal.length-1]} `)

fruits_seasonal.unshift("Papaya")
console.log(`After Adding "Papaya":`, fruits_seasonal)

fruits_seasonal.splice(4,1)
console.log(`After removing "Mango":`, fruits_seasonal)

fruits_seasonal.push("Pineapple")
console.log(`After adding "Pineapple" at last:`, fruits_seasonal)

fruits_seasonal.splice(4,0,"Dragon Fruit")
console.log(`After adding "Dragon Fruit" before "Water Melon":`, fruits_seasonal)

fruits_seasonal.splice(2,1,"kiwi")
console.log(`Replace "Orange" with "kiwi":`, fruits_seasonal)

console.log(`Elements from index 1 to 4:`, fruits_seasonal.slice(1,5))
console.log(`Last 3 Element:`,fruits_seasonal.slice(fruits_seasonal.length-3))
