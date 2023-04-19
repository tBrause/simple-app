/**
 *
 * Simple HTML APP
 *
 */

// MODULES
const http = require("http");

// CREATE SERVER
const server = http.createServer(function (request, response) {
  // RESPONSE HEAD
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });

  // HTML HEADER
  let htmlContent = `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0">`;

  // TITLE
  htmlContent += `<title>Node.js Demo</title>`;

  // HTML HEADER CLOSE
  htmlContent += `</head>`;

  // HTML BODY
  htmlContent += `<body>\n`;
  htmlContent += `<h1 style="color:green">Hello World</h1>`;

  // HTML CLOSE
  htmlContent += `</body>\n</html>`;

  // RESPONSE END
  response.end(htmlContent);
});

// START SERVER
server.listen(3000, function () {
  console.log("Server is listening to http://localhost:3000");
});
