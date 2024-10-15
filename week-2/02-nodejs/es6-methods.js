//map, filter, arrow functions - Introduced in JS ES6

function sum(a, b) {
    return a + b
}

const subtract = (a, b) => {
    if(a > b) return a - b
    return b - a
}

//The difference between them is the way they are binded internally.

//--------------------------------------MAP--------------------------------//

//Given an array, return a new array in which every value is multiplied by 2
//[1,2,3,4,5] => [2,4,6,8,10]

const input = [1,2,3,4,5]
//Standard soln would be to have a for-loop and iterate over it. 
//Better written solution
const newArr = input.map((val, index) => val * 2)
//Instead of an annonymous fn, you can pass a function also. 
const multipl2 = (element) => {
    return element * 2
}

const newArr1 = input.map(multipl2)

console.log("Map output - ", newArr + " <=> " + newArr1)

//Implementation of map
const myMap = (callbackfn, arr) => {
    const newArr = []
    for (let index = 0; index < arr.length; index++) {
        newArr.push(callbackfn(arr[index]))
    }
    return newArr
}

const newArr2 = myMap(multipl2, input)
console.log("Custom implementation of map - ", newArr2)


//------------------------------------FILTER-------------------------------//
//Given an array, return a new array in which has all even values
//[1,2,3,4,5] => [2,4]

//Standard soln would be to have a for-loop and iterate over it. 
//Better written solution
const newArrFilter = input.filter((val, index) => val % 2 == 0)
//Instead of an annonymous fn, you can pass a function also. 
const isEven = (element) => {
    return element % 2 == 0
}

const newArr1Filter = input.filter(isEven)

console.log("Filter output - ", newArrFilter + " <=> " + newArr1Filter)

//Implementation of map
const myFilter = (callbackfn, arr) => {
    const newArr = []
    for (let index = 0; index < arr.length; index++) {
        if(callbackfn(arr[index])){
            newArr.push(arr[index])
        }
    }
    return newArr
}

const newArr2Filter = myFilter(isEven, input)
console.log("Custom implementation of filter - ", newArr2Filter)