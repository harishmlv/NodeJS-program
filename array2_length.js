// WAP to print Array Names and length of the Name also use sort function

var sname = ["Pooja","Ram","Shyam","Harish","Himanshu"];

for(i=0;i<sname.length;i++)
{
    console.log("Name = "+sname[i]+", and length = "+sname[i].length);
}

//Using Sort Function

console.log("Sort Function List");
var s = sname.sort();
for(i=0;i<sname.length;i++)
{
    console.log(s[i]);
}