const http = require("http");
var fs = require('fs');
const hostname = "localhost";
const port =process.env.PORT || 3000;
var solan_home = 0;
var solan_about = 0;
const server = http.createServer((req, res) => {
res.setHeader("Content-Type","text/html");
res.statusCode = 200;
switch (req.url){
    case "/home":
        res.writeHead(200);
    var data =fs.readFileSync('./home.html');
   
    res.end(data.toString());
 
    console.log("--- request home page !!!", solan_home++);
        break;

    case "/about":
        res.writeHead(200);
        res.end("<h1>This is about page</h1>");
        console.log("--- request about page !!!", solan_about++);
        break;
        default:
            res.writeHead(200);
         res.end("ERROR");
            console.log("--- ERROR !!!");
        break;
}
});
server.listen( port,() => {
console.log("Listen !!! ",port);
});