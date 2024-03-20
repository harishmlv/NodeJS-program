// small to capital like pooja>>Pooja.


var list=["divyanshu","sandeep patel","vikash","shubham","swapnil","kuldeep","pradeep","pawan","lakhan","harish"];
var i,j;
for(i=0;i<list.length;i++)
{
    var t=list[i][0].toUpperCase();
    for(j=1;j<list[i].length;j++)
    {
        t += list[i][j];
    }
    console.log(t);
}