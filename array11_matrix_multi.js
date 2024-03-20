//Q.5 wap to matrix multiplication..?
var a=[[1,3,5],[2,4,6],[7,8,9]];
var b=[[1,2,3],[4,5,6],[9,8,7]];
var c=[[],[],[]];
var i,j,k;
for(i=0;i<3;i++)
{
    for(j=0;j<3;j++)
    {
        c[i][j]=0;
        for(k=0;k<3;k++)
        {
            c[i][j]=c[i][j]+a[i][k]*b[k][j];
        }
    }
}
console.log("first matrix ");
for(i=0;i<3;i++)
{
    console.log(a[i][0]+" "+a[i][1]+" "+a[i][2]);
}
console.log("second matrix ");
for(i=0;i<3;i++)
{
    console.log(b[i][0]+" "+b[i][1]+" "+b[i][2]);
}
console.log("multiplication matrix ");
for(i=0;i<3;i++)
{
    console.log(c[i][0]+" "+c[i][1]+" "+c[i][2]);
}