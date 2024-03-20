var fs = require("fs");
var s1 = {scode:101,sname:"Raja",marks:450};
var s2 = JSON.stringify(s1);
fs.writeFile("./json_school.json",s2,()=>{
    console.log("Data Saved");
});