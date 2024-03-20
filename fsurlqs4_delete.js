// delet-module


var http=require("http");
var url=require("url");
var qs=require("querystring");
var fs=require("fs");
const PORT=3457;

http.createServer((req,res)=>{
    var udata=url.parse(req.url);
    var qdata=qs.parse(udata.query);
    fs.readFile("./fsurlqs_emp.json","utf-8",(err,data)=>{
        var elist=JSON.parse(data);
        for(i=0;i<elist.length;i++)
        {
            elist.splice(i,1);
            var ulist=JSON.stringify(elist);
            fs.writeFile("./fsurlqs_emp.json",ulist,()=>{
                res.write(ulist);
                res.end();
            });
        }
    });
}).listen(PORT,()=>{
    console.log("sevrer is running on PORT="+PORT);
})