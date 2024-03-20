// Asynchronous programming in JavaScript refers to the
// execution of operations that may take some time to complete,
// without blocking the execution of other code.
// Asynchronous operations are common in scenarios
// such as fetching data from servers, reading
// files, or waiting for user input.

// There are several mechanisms for handling asynchronous operations in JavaScript:

// Callbacks: Callbacks are functions that are passed as arguments to other functions, to be executed once an asynchronous operation completes.

function fetchData1(callback) {
    setTimeout(function() {
        const data = "Some fetched data";
        callback(data);
    }, 2000);
}

function processData1(data) {
    console.log("Data received:", data);
    console.log()
}

// fetchData1(processData1);

// Promises: Promises provide a more structured way to deal with asynchronous operations and handle their results or errors.

function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const data = "Some fetched data";
            reject("This error occured")
            resolve(data);
        }, 2000);
    });
}

// fetchData2().then(data => {
//     console.log("Data received:", data);
//     console.log()
// }).catch(error => {
//     console.error("Error fetching data:", error);
// })

// Async/Await: Async functions and the await keyword provide a syntax for writing asynchronous code in a synchronous style, making it easier to understand and manage.


async function fetchData3() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const data = "Some fetched data";
            resolve(data);
        }, 2000);
    });
}

async function processData3() {
    try {
        const data = await fetchData3();
        console.log("Data received:", data);
        console.log()
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

processData3();