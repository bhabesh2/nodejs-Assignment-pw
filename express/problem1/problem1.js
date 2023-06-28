const http = require("http");

const menProducts = require('./men_products');
const womenProducts = require('./women_products');


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Men & Women Dummy Data");
  } else if (req.url === "/men") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(menProducts.slice(0, 10)));
  } else if (req.url === "/women") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(womenProducts.slice(0, 10)));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
