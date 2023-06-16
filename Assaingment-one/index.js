const fs = require("node:fs");
const path = require("node:path");

const fileName = "nodejs_architecture.txt";
const filePath = path.join(__dirname, fileName);
const content =
  "Node.js is a platform that utilizes javaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites.The platform is constructed using google chrome's V8 javaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtain all the application's resources over the internet.";

// create a file give a content too:

fs.writeFile(filePath, content, (err) => {
  if (err) throw err;
  console.log("Success!");
});

// read the file content to the console from here:

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Content:--->", data);
});

// append some additional data to the content and displayed to the console.

const adv = {
    highPerformance: 'Node.js is built on the V8 engine, which compiles JavaScript into highly efficient machine code. This allows Node.js applications to have fast execution and handle a large number of concurrent connections without blocking or slowing down the server.',
    scalAbility: 'Node.js uses an event-driven, non-blocking I/O model, which makes it highly scalable. It can handle a large number of concurrent requests with minimal resource consumption.',
    JavaScriptEverywhere: ' Node.js enables developers to use JavaScript both on the client-side and server-side. This allows for code reuse, improved productivity, and seamless communication between the client and server components of an application.',
}

// Create a string with bullet points for the advantages: 

const bulletPoints = Object.values(adv).map((advantage) => `- ${advantage}`).join('\n\n');

// Append the bullet points to the content:

const updatedContent = `${content}\n\nAdvantages:\n${bulletPoints}\n`;

fs.appendFile(filePath, updatedContent, 'utf-8',(err)=>{
    if(err) throw err;
    console.log('append successful');
})

// delete the file.

fs.unlink(filePath, (err)=>{
    if(err) throw err;
    console.log('File Deleted Successfully');
});