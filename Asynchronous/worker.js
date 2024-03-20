// In JavaScript, traditional multithreading with shared memory and concurrent 
// execution of threads is not directly supported in the same way 
// as in languages like Java or C++. However, JavaScript does 
// support asynchronous programming, which allows for concurrent
//  execution of tasks without blocking the main execution thread.

// Web Workers: Web Workers are a browser feature that allows
//  JavaScript code to run in background threads. 
//  Workers run in separate threads from the main
//   JavaScript thread, enabling concurrent execution 
//   of tasks. However, communication between the main 
//   thread and workers is done through messaging, and 
//   workers do not share the same memory space as the main thread.


// Creating a new worker
// const worker = new Worker('worker.js');
 
// // Sending a message to the worker
// worker.postMessage({ data: 'Hello from main thread' });

// // Listening for messages from the worker
// worker.onmessage = function(event) {
//     console.log('Message from worker:', event.data);
// };


// worker.js

// Listen for messages from the main thread
self.onmessage = function(event) {
    // Get the data from the message
    const messageData = event.data;

    // Echo back the received data to the main thread
    self.postMessage({ echo: messageData });
};
