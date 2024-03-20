// Export File

var calc = {
    sum:function(a,b)
    {
        return a+b;
    },
    multi:function(a,b)
    {
        return (a*b);
    },
    evenOdd:function(n)
    {
        if(n%2==0)
        {
            return "Even Number";
        }
        else
        {
            return "Odd Number";
        }
    }
};
module.exports = calc;