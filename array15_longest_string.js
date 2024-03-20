// Print longest Array String.

var list = ["divyanshu","ram","rohan","sujal","roshan"];
var max=0,k;
for(i=0;i<list.length;i++)
{
    if(list[i].length>max)
    {
        max=list[i].length
        k=i;
    }
}
console.log("Longest Number = "+list[k]);