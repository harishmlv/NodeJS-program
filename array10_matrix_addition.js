// addition of two matrix.


var a=[[3,5,7],[8,9,6]];
var b=[[2,23,6],[6,24,65]];
var c=[[],[]];
var i,j;
for(i=0;i<2;i++)
{
    for(j=0;j<3;j++)
    {
        c[i][j]=a[i][j]+b[i][j];
    }
}
console.log("First Matrix");
for(i=0;i<2;i++)
{
    console.log(a[i][0]+" "+a[i][1]+" "+a[i][2]);
}
console.log("Second Matrix");
for(i=0;i<2;i++)
{
    console.log(b[i][0]+" "+b[i][1]+" "+b[i][2]);
}
console.log("Addition of First and Second Matrix");
for(i=0;i<2;i++)
{
    console.log(c[i][0]+" "+c[i][1]+" "+c[i][2]);
}
