// WAP for 2x2 Matrix Multiplication.

var a=[[1,3],[2,6],[8,9]];
var b=[[1,2],[5,6],[8,7]];
var c=[[],[]];
var i,j,k;
for(i=0;i<2;i++)
{
    for(j=0;j<2;j++)
    {
        c[i][j]=0;
        for(k=0;k<2;k++)
        {
            c[i][j]=c[i][j]+a[i][k]*b[k][j];
        }
    }
}
console.log("first matrix");
for(i=0;i<2;i++)
{
    console.log(a[i][0]+" "+a[i][1]);
}
console.log("second matrix");
for(i=0;i<2;i++)
{
    console.log(b[i][0]+" "+b[i][1]);
}
console.log("multiplication matrix");
for(i=0;i<2;i++)
{
    console.log(c[i][0]+" "+c[i][1]);
}