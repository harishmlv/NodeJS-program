// Check Armstrong to any number using function With Argument With Return.

function armstrong(n)
{
    var i,p,t,u,sum=0,temp,c=0;
    temp = n

    while(n>0)
    {
        c=c+1;
        n = parseInt (n/10);
    }
    n = temp
    while(n>0)
    {
        r = n%10
        t = 1
        for(i=1; i<=c; i++)
        {
            t = t*r
        } 
        sum = sum+t;
        n = parseInt (n/10)
    }
    n = temp;

    if(n == sum)
    {
        return ("Number is Armstrong")
    }
    else
    {
        return ("Number is not Armstrong")
    }
}

var k = armstrong(5);  // armstrong number
console.log(k);

var m = armstrong(25); // not an armstrong number
console.log(m);

var l = armstrong(370); // armstrong number
console.log(l); 