// WAP to find out Factorial using Function Argument with Value Return 

function factorial(num)
{
    var i, fact = 1;
    for (i=1; i<=num; i++)
    {
        fact = fact * i;
    }
    return (fact);
}
var k = factorial(5)
console.log("Factorial = "+k);