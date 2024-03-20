var http = require("http");
var url = require("url");
var qs = require("querystring");  // used to get data from querystring
const PORT = 3111;

http.createServer((req,res)=>{
    var udata = url.parse(req.url);
    var qdata = qs.parse(udata.query);
    console.log(qdata);
    res.write("ID = "+qdata.id+"name ="+qdata.name+"Marks ="+qdata.marks);
    res.end();
}).listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
});

// run in terminal and then search in browser = http://localhost:3111/?id=101&name=amit&marks=450