var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
const PORT = 3456;

http.createServer((req,res)=>{
    var udata = url.parse(req.url);
    var qdata = qs.parse(udata.query);
    fs.readFile("./fsurlqs_emp.json","utf-8",(err,data)=>{
        var elist = JSON.parse(data);
        for(i=0;i<elist.length;i++)
        {
            if(elist[i].ecode==qdata.ecode)
            {
                var obj = {
                    ecode:elist[i].ecode,
                    ename:elist[i].ename,
                    esal:elist[i].esal
                };
                res.write(JSON.stringify(obj));
                res.end();
            }
        }
    })
    }).listen(PORT,()=>{
        console.log("Server is running on port "+PORT);
});
