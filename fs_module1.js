// Write data in file 1 

var fs = require("fs");
var data = "Sujal is Good Boy";
fs.writeFile("./fsmoduletext.txt",data,()=>{
    console.log("Data Saved");
});