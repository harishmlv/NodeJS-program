// WAP to Reverse Number using Function No Argument with Return

function reverse()
{
    var n,r,s=0;
    n = 4567;

    while (n>0)
    {
        r = n%10;
        s = s*10+r;
        n = parseInt (n/10);
    }
    return s;
}
var k = reverse()
console.log("Reverse Number Is = "+k);