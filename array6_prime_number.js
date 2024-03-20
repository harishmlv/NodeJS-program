// Store 10 numbers in Array and print PRIME numbers only.

var a = [5,6,7,4,9,11,12,13,2,21];   
var i,j,c;

for(i=0;i<10;i++)
{
    c = 0;
    for(j=1;j<=a[i];j++)
    {
        if ( a[i] % j ==0 )
        {
            c++;
        }
    }
    if ( c == 2)
    {
        console.log(a[i]);
    }
}

// output = 5,7,11,13,2