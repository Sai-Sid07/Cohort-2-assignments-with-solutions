let count = 0;

function incrementCounter() {
    count++;
    console.log(`Count: ${count}`);
    setTimeout(incrementCounter, 1000);
}

incrementCounter();