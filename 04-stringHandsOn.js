function stringHandsOn(){
var string = "   Hey you are doing good, keep it up   "
console.log(`Given string is: ${string}`)
console.log('------------------------------------')
console.log(`Length of String is: ${string.length}`)
console.log('------------------------------------')
var trimStr = string.trim();
console.log(`After trim string is: ${trimStr},   After trim length is: ${trimStr.length}`)
console.log('------------------------------------')
console.log(`First Character: ${trimStr.charAt(0)}, Last Character: ${trimStr.charAt(trimStr.length-1)}`)
console.log('------------------------------------')
console.log(`Total character after trim: ${trimStr.split(' ').length}`)
console.log('------------------------------------')
console.log( `Index of "good" from the string: ${trimStr.indexOf("good")}`)
console.log('------------------------------------')
console.log(`Substring starting from Index 22: ${trimStr.substring(22)}`)
console.log('------------------------------------')
var strSplit = trimStr.split(' ')
console.log(`If string ends with word "up" ?: ${strSplit[strSplit.length-1]=='up'?true:false}`)
console.log('------------------------------------')
console.log(`If string starts with word "Hey" ?: ${strSplit[0]=='Hey'?true:false}`)
console.log('------------------------------------')
}
stringHandsOn()