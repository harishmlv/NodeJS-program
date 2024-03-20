// Example of class and object

class calc
{
    constructor()
    {
        this.a;
        this.b;
        this.c;
    }
    setData(a,b)
    {
        this.a = a;
        this.b = b;
    }
    sum()
    {
        this.c = this.a + this.b
        console.log("Sum = "+this.c);
    }
    multi()
    {
        this.c = this.a * this.b
        console.log("Multi = "+this.c);
    }
}
var obj1 = new calc();
obj1.setData(5,8);
obj1.sum();
obj1.multi();