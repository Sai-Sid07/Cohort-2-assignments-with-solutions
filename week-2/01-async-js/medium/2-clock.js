const date = new Date()

function systemClock1() {
    const date = new Date()
    const hours = date.getHours()
    const mins = date.getMinutes()
    const seconds = date.getSeconds()

    console.log(`${hours}:${mins}:${seconds}`)
    setTimeout(systemClock1, 1000)
}

function systemClock2() {
    const date = new Date()
    const hours = date.getHours()
    const mins = date.getMinutes()
    const seconds = date.getSeconds()
    const period = hours >= 12 ? "PM" : "AM"

    console.log(`${hours}:${mins}:${seconds} ${period}`)
    setTimeout(systemClock2, 1000)
}


systemClock2()