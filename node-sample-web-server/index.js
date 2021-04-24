const path = require("path");
const fs = require("fs");
const http = require("http");
const Person = require("./public/sample");

new Person("Bha").print();

const server = http.createServer((req, res) => {
  console.log(req.url);

  const url = req.url;
  let fileName = "index.html";

  switch (url) {
    case "/about":
      fileName = "about.html";
      break;
    default:
      fileName = "index.html";
  }

  fs.readFile(path.join(__dirname, "public", fileName), {}, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.setHeader("Content-Type", "text/html");
    // res.write(data);
    res.end(data);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Server Started"));
