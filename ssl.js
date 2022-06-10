// MODULES
const https = require('https');
const fs = require('fs');

const hostname = 'guteswetter.ddns.net';
const port = 3000;

// CERTS
const options = {
	key: fs.readFileSync('/var/www/node/ssl/cert/privkey.pem'),
	cert: fs.readFileSync('/var/www/node/ssl/cert/cert.pem')
};

// CREATE SERVER
const server = https.createServer(options, function (request, response) {
	
	// RESPONSE HEAD
	response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
	
	// HTML HEADER
	let htmlContent = `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0">`;

	// TITLE
	htmlContent += `<title>Node-HTTPS-Server</title>`;

	// HTML HEADER CLOSE
	htmlContent += `</head>`;

	// HTML BODY
	htmlContent += `<body>\n`;
	htmlContent += `<h1>Node-HTTPS-Server running</h1>`;
	htmlContent += `<h2>at https://${hostname}:${port}</h2>`;

	// HTML CLOSE
	htmlContent += `\n</body>\n</html>`;

	// RESPONSE END
	response.end(htmlContent);
});

// START SERVER
server.listen(port, hostname, () => {
	console.log(`Server running at https://${hostname}:${port}/`);
});
