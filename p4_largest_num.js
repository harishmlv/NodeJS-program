// Find largest number in three different numbers using function with argument and no return

function largest(a,b,c)
{
    if (a>b && a>c)
    {
        console.log("A is Largest Number");
    }
    if (b>a && b>c)
    {
        console.log("B is Largest Number");
    }
    if (c>a && c>b)
    {
        console.log("C is Largest Number");
    }
}
largest(55,21,46);