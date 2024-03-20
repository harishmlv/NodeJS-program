function arm()
{
    var n=153;
    var h=parseInt(n/100);
    var t=parseInt((n/10)%10);
    var u=n%10;
    var sum=(h*h*h)+(t*t*t)+(u*u*u);
    if(n==sum)
    {
        console.log("Armstrong Number")
    }
    else
    {
        console.log("Not an Armstrong Number")
    }
}
arm();