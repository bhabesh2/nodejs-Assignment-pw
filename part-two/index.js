const os = require("node:os");

const osName = os.platform();
const version = os.release();
console.log("Os name:---->", osName); // linux;
console.log("Os Version:---->", version); // 5.19.0-43-generic

// by using http module i am creating a server for the localhost 3000 port.

/*

const http = require("node:http");
const { EventEmitter } = require("node:stream");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>I am Happy to Learn Full Stack Development from PW Skills!</h1>");
  }
  res.end();
});


server.listen(3000, ()=>{
    console.log('Server running on 3000 port')
})

*/

// This is for question number 8

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("subscribe", (message) => {
  console.log(`Thanks for subscribing to ${message}`);
});

eventEmitter.emit("subscribe", "College Wallah");

// This is for question number 9;

// Define the event handler

const eventHandler = () => {
  console.log("Event handler is called");
};

// Add the event listener

eventEmitter.on("clickEvent", eventHandler);

// Trigger the event

eventEmitter.emit("clickEvent"); // Output: "Event handler is called"

// Remove the event handler

const removeEventHandler = () => {
  eventEmitter.removeListener("myEvent", eventHandler);
  console.log("Event handler removed successfully");
};

// Call the function to remove the event handler

removeEventHandler();

// Trigger the event again

eventEmitter.emit("myEvent"); // Output: Event handler removed successfully.

// this is for question number 10

// Determine the current maximum number of event listeners
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log(`The default maximum number of event listeners are: ${currentMaxListeners}`);

// Set the maximum number of event listeners to 5
eventEmitter.setMaxListeners(5);

// Display the updated maximum number of event listeners
const updatedMaxListeners = eventEmitter.getMaxListeners();
console.log(`The updated maximum number of listeners are: ${updatedMaxListeners}`);