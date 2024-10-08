const fs = require("fs")

let fileData = ""

function dataFromFile() {
    return new Promise((resolve, reject) => {
        fs.readFile("file.txt", "utf-8", (err, data) => {
            if(err){
                reject(err)
            } else{
                resolve(data)
            }
        })  
    })
}

async function replaceFileContent(){
    fileData = await dataFromFile()
    fileData = fileData.replace(/\s+/g, ' ')
    fs.writeFile("file.txt", fileData, (err) => {
        console.error(err)
    })
}

replaceFileContent()