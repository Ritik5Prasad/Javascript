// // The Browser Object Model (BOM)
// // There are no official standards for the Browser Object Model (BOM).

// The Browser Object Model (BOM) is a browser-specific convention referring to all the objects exposed by the web browser. The BOM allows JavaScript to “interact with” the browser.
// // Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.

// The Window Object
// The window object is supported by all browsers. It represents the browser's window.

// All global JavaScript objects, functions, and variables automatically become members of the window object.


// window.innerHeight - the inner height of the browser window (in pixels)
// window.innerWidth - the inner width of the browser window (in pixels)

// window.open() - open a new window
// window.close() - close the current window
// window.moveTo() - move the current window
// window.resizeTo() - resize the current window

// The window.location object can be written without the window prefix.

// Some examples:

// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document


// The window.history object contains the browsers history.

// Window History
// The window.history object can be written without the window prefix.

// To protect the privacy of the users, there are limitations to how JavaScript can access this object.

// Some methods:

// history.back() - same as clicking back in the browser
// history.forward() - same as clicking forward in the browser
// Window History Back
// The history.back() method loads the previous URL in the history list.

// This is the same as clicking the Back button in the browser.

// The window.navigator object contains information about the visitor's browser.

// Window Navigator
// The window.navigator object can be written without the window prefix.

// Some examples:

// navigator.cookieEnabled
// navigator.appCodeName
// navigator.platform
// Browser Cookies
// The cookieEnabled property returns true if cookies are enabled, otherwise false:

{/* <p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script> */}

// window.alert
// window.prompt
// window.confirm

// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.