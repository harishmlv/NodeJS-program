// example Array of Object

class student
{
    constructor()
    {
        this.rno;
        this.sname;
        this.marks;
    }
    setData(rno,sname,marks)
    {
        this.rno = rno;
        this.sname = sname;
        this.marks = marks;
    }
    showData()
    {
        console.log(this.rno+" "+this.sname+" "+this.marks);
    }
}
var s = new student([5]);
for(var i=0; i<5; i++)
{
    s[i] = new student();
}
s[0].setData(1001,"Aaryan",500);
s[1].setData(1002,"Harish",400);
s[2].setData(1003,"Vishal",300);
s[3].setData(1004,"Sujal",200);
s[4].setData(1005,"Gourav",100);
for(var i=0; i<5; i++)
{
    s[i].showData();
}