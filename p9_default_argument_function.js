// DEFAULT ARGUMENT FUNCTION = used to pass default value as argument in Function.

function sum(a=10, b=20)
{
    var c = a+b;
    console.log("Value of A = "+a);
    console.log("Value of B = "+b);
    console.log("Value of A and B = "+c);    
}

sum(); // Function calling

sum(5); //5+20=25

sum(8,7); //8+7=15