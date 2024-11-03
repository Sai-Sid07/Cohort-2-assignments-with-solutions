// console.log("Hello World")

// Write a program to greet a person given their first and last name
function greet(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName)
}

// Write a program to greet a person based on their gender
function greetGender(firstName, lastName, gender){
    if(gender == "Male"){
        console.log("Hello Mr " + firstName + lastName)
    }else{
        console.log("Hello Mrs " + firstName + lastName)
    }
}

// Write a program that counts from 0 to 1000 and prints
function counter(){
    let counter = 0
    for (let index = 0; index <= 1000; index++) {
        counter += index
    }

    console.log(counter);
}

// Write a program to print all even numbers in an array
function printEven(arr){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 == 0){
            console.log(arr[index])
        }
    }
}

// Write a program to print the bigger number in an array
function printBigNumber(arr){
    let biggestNumber = arr[0]
    for (let index = 1; index < arr.length; index++) {
        if(biggestNumber < arr[index]){
            biggestNumber = arr[index]
        }
    }
    console.log("Biggest number - " + biggestNumber)
}

//  Write a program to print name of all males given a complex object
function printMaleNames(objects){
    for (let index = 0; index < objects.length; index++) {
        let object = objects[index]
        if(object.gender == "male"){
            console.log(object.name)
        }
        
    }
}

// Write a function to sum 2 numbers
function sum2Numbers(num1, num2, callback){
    let result = num1 + num2
    callback(result)
}

// Write another function that displays it in a pretty format
function displayPrettyOutput(output){
    console.log("Result of the sum is: " + output)
}

// Write another function that displays this in passive voice
function displayPrettyOutputPassiveVoice(output){
    console.log("Sum's result is: " + output)
}

// Time function takes to execute
function countFrom30to0(){
    // console.time("Count 30 to 0")
    for (let index = 30; index >= 0; index--) {
                
    }
    // console.timeEnd("Count 30 to 0")
}

// Time it takes between setTimeout call and inner function actually running
function doSomething(){

    console.timeEnd("Check setTimeout")

    console.log("Execute")
}
console.time("Check setTimeout")
setTimeout(doSomething, 1000)

// Create a terminal clock
setInterval(() => process.stdout.write(`${new Date()}\r`), 1000); // \r to terminate the previous line with stdout

/*

counter()

objects = [
    {
        name: "Sai",
        gender: "male",
        age: 22
    },
    {
        name: "Sid",
        gender: "male",
        age: 22
    },
    {
        name: "Arya",
        gender: "female",
        age: 22
    },
    {
        name: "Avantika",
        gender: "female",
        age: 22
    }
]

printMaleNames(objects)

sum2Numbers(1, 2, displayPrettyOutputPassiveVoice)

countFrom30to0()
*/
