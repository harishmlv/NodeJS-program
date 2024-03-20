var http = require("http");
var fs = require("fs");
const PORT = 2333;

http.createServer((req,res)=>{
    fs.readFile("./http_books.json","utf-8",(err,data)=>{
        if(err)
        {
            res.write(err);
            res.end();
        }
        else
        {
            res.write(data);
            res.end();
        }
    })
}).listen(PORT,()=>{
    console.log("Server is Running on Port "+PORT);
});

// Run in terminal and then search on browser = http://localhost:2333