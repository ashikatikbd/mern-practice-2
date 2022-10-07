let add = (a,b) => a+b
let sub = (a,b) => a-b
let div = (a,b) => a / b
let test = (a,b) => add(a,b) / sub(a,b)
module.exports.sub = sub
module.exports.test = test
module.exports.add = add

// console.log(module)

let obj = {
    name : 'ashik',
    age: 'Twenty',
    village: 'Mohonpur'
}
let json = JSON.stringify(obj)
console.log(json)

let str = 'I love my country'
let json1 = JSON.parse(json)
console.log(json1)

