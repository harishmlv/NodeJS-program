var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
const PORT = 3455;

http.createServer((req,res)=>{
    var udata = url.parse(req.url);
    var qdata = qs.parse(udata.query);
    console.log(qdata);
    fs.readFile("./fsurlqs_emp.json","utf-8",(err,data)=>{
        var obj = {
            ecode:qdata.ecode,
            ename:qdata.ename,
            esal:qdata.esal
        };
        var elist = JSON.parse(data);
        elist.push(obj);
        var ulist = JSON.stringify(elist);
        fs.writeFile("./fsurlqs_emp.json",ulist,()=>{
            res.write(ulist);
            res.end();
        })
    });
}).listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
});

// open browser and search = http://localhost:3455/?ecode=101&ename=amit&esal=42000