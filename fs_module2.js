// Read Data file

var fs = require("fs");
fs.readFile("./fsmoduletext.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data);
    }
});