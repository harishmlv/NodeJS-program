var fs = require("fs");
fs.readFile("./json_school.json","utf-8",(err,data)=>{
    console.log(data);
});