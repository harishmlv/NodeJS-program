// edit-module
var http=require("http");
var url=require("url");
var qs=require("querystring");
var fs=require("fs");
const PORT=3456;
http.createServer((req,res)=>{
    var udata=url.parse(req.url);
    var qdata=qs.parse(udata.query);

    fs.readFile("./fsurlqs_emp.json","utf-8",(err,data)=>{
        var elist=JSON.parse(data);
        for(i=0;i<elist.length;i++)
        {
            if(elist[i].ecode==qdata.ecode)
            {
                elist[i].ecode=qdata.ecode;
                elist[i].ename=qdata.ename;
                elist[i].esal=qdata.esal;
                var ulist=JSON.stringify(elist);
                fs.writeFile("./fsurlqs_emp.json",ulist,()=>{
                    res.write(ulist);
                    res.end();
                });
            }
        }
    });
}).listen(PORT,()=>{
    console.log("server is running on port="+PORT);
});

// http://localhost:3456/?ecode=101&ename=rani&esal12000