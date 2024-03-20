// Default Constructor or Zero Argument Constructor

class student
{
    constructor()
    {
        this.rollno = 100;
        this.sname = "Harish";
        this.marks = 500;
        console.log("Default Constructor Invoked");
    }
    showDetails()
    {
        console.log("Roll No. = "+this.rollno);
        console.log("Student Name = "+this.sname);
        console.log("Marks = "+this.marks);
    }
}

var s1 = new student();
s1.showDetails();

var s2 = new student();
s2.showDetails();