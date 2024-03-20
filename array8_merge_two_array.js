// Merge two Array in third array Alternatively.

var a = [1,2,3,4,5];
var b = [6,7,8,9,10];
var c = [];
var i,j=0,k=0;

for(i=0;i<10;i++)
{
    if(i%2==0)
    {
        c[i] = a[j];
        j++;
    }
    else
    {
        c[i] = b[k];
        k++;
    }
}

console.log("First Array = "+a);
console.log("Second Array = "+b);
console.log("Third Array = "+c);