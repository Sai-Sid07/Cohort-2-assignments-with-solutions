//Synchronous - Things happen together, one thing happens after the other. At any given point, only one action takes place
//Asynchronous - Happens in parts, any given point, multiple things happen. Alot of context switching takes place.
//Javascript is single-threaded but can context switch 

const { on } = require("events")
const fs = require("fs")

fs.readFile("sample.txt", "utf-8", (err, data) => {
    console.log("Async: ", data)
})

console.log("Runs First")

const fileData = fs.readFileSync("sample.txt", {encoding: "utf-8"})

console.log("Sync: ", fileData.toString())

console.log("Runs Two")

//Every async function written in Javascript internally calls either fs.readFile or setTimeout() since these are provided async fns by js.
//callbacks are a bad way to write code because of something called callback hell.

function sidsReadFile() {
    return new Promise(function(resolve){
        fs.readFile("sample.txt", "utf-8", function(err, data){
            resolve(data)
        })
    })
}

function onDone(data){
    console.log("Promise: ", data)
}

console.log(sidsReadFile())
sidsReadFile().then(onDone)

//Promises have 3 states => pending, resolved, rejected

//Using async, await
//The caller only has async-await

async function asyncFunction(resolve) {
    const value = await sidsReadFile(resolve)
    console.log("Async-await: " + value)
}

asyncFunction(onDone)

//Situations where Async is used - 
/*
    1. Database calls
    2. Reading file system
    3. Network calls (API Calls)
*/