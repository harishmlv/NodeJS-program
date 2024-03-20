// example of Class & Object = Employee Data.

class Emp
{
    constructor()
    {
        this.ecode;
        this.ename;
        this.esal;
    }
    setData(ecode,ename,esal)
    {
        this.ecode = ecode;
        this.ename = ename;
        this.esal = esal;
    }
    showData()
    {
        console.log("Employee Code = "+this.ecode);
        console.log("Employee Name = "+this.ename);
        console.log("Employee Salary = "+this.esal);
    }
}
var e1 = new Emp();
e1.setData(101,"Raja",20000);
e1.showData();

var e2 = new Emp()
e2.setData(102,"Shyam",25000);
e2.showData();