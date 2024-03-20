// Parameterize or with Argument Constructor

class Employee
{
    constructor(ecode,ename,esal)
    {
        this.ecode = ecode;
        this.ename = ename;
        this.esal = esal;
        console.log("Parameterized Constructor Invoked");
    }
    showDetails()
    {
        console.log("Employee Code = "+this.ecode);
        console.log("Employee Name = "+this.ename);
        console.log("Employee Salary = "+this.esal);
    }
}

var e1 = new Employee(101,"Harish",15000);
e1.showDetails();
var e2 = new Employee(102,"Sujal",14000);
e2.showDetails();
