// http Module in Node js.

var http = require("http");
const PORT = 3232;

http.createServer((req,res)=>{
    res.write("This is my first server Application");
    res.end();
}).listen(PORT,()=>{
    console.log("Server started at port "+PORT);
});


// 1. Run in terminal
// 2. oper browser and search = http://localhost:3232