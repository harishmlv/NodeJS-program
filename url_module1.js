// URL module = used to get url information.

var http = require("http");
var url = require("url");
const PORT = 3456;

http.createServer((req,res)=>{
    var udata = url.parse(req.url);
    console.log(udata);
    res.write("hello");
    res.end();
}).listen(PORT,()=>{
    console.log("Server is running on Port "+PORT);
});