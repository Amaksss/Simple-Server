//1. require the http module which makes it possible to handle incoming http reques
const http = require('http');


//2. create variable to define the hostname and port
const HOSTNAME = 'localhost';
const PORT = 8900;


//5. create a function to listen and respond to requests
function requestHandler(req, res){
    res.writeHead(200); //Status code 200 is ok
    res.write('My name is Chiamaka Orabuchi');
    res.end();
};


//3. define a constant with the http module and use the createserver method
const server = http.createServer(requestHandler)


//4. start the server
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running successfully at https://${HOSTNAME}:${PORT}/`)
});





























/*const http = require("http");

const hostname = 'localhost';
const port = 8000;

// Add Request Listener to the server
const requestListener = function (request, response) {
    response.writeHead(200); // Status code 200 = OK
    response.write("Hello World");
    response.end();
};



// Create the server
const server = http.createServer(requestListener)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
*/