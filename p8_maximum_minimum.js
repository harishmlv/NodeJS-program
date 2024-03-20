// WAP to find SMALLEST and LARGEST digit in any number using function with Argument and No Return

function maxMin(n)
{
    var min = 9, max = 0;

    while (n>0)
    {
        r = n%10;
        
        if (r>max)
        {
            max = r
        }
        if (r<min)
        {
            min = r
        }
        n = parseInt(n/10);
    }
    console.log("Smallest Number = "+min);
    console.log("Largest Number = "+max);
}

maxMin(25975)