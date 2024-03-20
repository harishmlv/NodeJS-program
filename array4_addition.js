// Calculate sum of two array elements and print in third array.

var a = [3,4,5,6,11];
var b = [5,4,9,7,6];
var c =[];

for (i=0;i<5;i++)
{
    c[i] = a[i] + b[i];
}
console.log("First Array = "+a);
console.log("Second Array = "+b);
console.log("Third Array = "+c);