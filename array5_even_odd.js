// WAP to print Even or Odd number.

var a = [ 5,6,7,3,5,7,2,8,13,11 ];
var i, even = 0, odd = 0;

for(i=0;i<10;i++)
{
    if(a[i]%2==0)
    {
        even = even+1; // even++
    }
    else
    {
        odd = odd+1;
    }
}
console.log(a);
console.log("Even Numbers = "+even);
console.log("Odd Numbers = "+odd);