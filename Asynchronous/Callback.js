// A callback is a function passed as an argument to another function.

// Simulating a function to fetch data from a server
function fetchDataFromServer(callback) {
    setTimeout(function() {
        const data = ['apple', 'banana', 'orange'];
        callback("We got error!", data); // Pass null for error and data for success
    }, 2000); // Simulating a 2-second delay
}

// Callback function to process the retrieved data
function processFetchedData(error, data) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data retrieved successfully:', data);
        // Processing the data
        const processedData = data.map(item => item.toUpperCase());
        console.log('Processed data:', processedData);
    }
}

// Fetch data from the server and pass the processing callback
fetchDataFromServer(processFetchedData);
