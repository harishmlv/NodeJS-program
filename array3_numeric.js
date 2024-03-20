// WAP to print numeric array elements and also print sum of array elements

var a =[3,6,8,12,6,11,67,34,21,19];

var s = 0;
for(i=0;i<a.length;i++)
{
    console.log(a[i]);
    s=s+a[i];
}
console.log("Sum of array = "+s);