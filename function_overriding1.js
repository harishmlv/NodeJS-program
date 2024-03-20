// Function Over-Riding Program

class School
{
    constructor()
    {
        this.scode;
        this.sname;
    }
    SetData(scode,sname)
    {
        this.scode=scode;
        this.sname=sname;
    }
    ShowData()
    {
        console.log("school code="+this.scode);
        console.log("school sname="+this.sname);
    }
}
class Teacher extends School
{
    constructor()
    {
        super();
        this.tid;
        this.tname;
    }
    SetData(tid,tname)
    {
        super.SetData(1,"govt.h.s.school");
        this.tid=tid;
        this.tname=tname;
    }
    ShowData()
    {
        super.ShowData();
        console.log("Teacher id="+this.tid);
        console.log("Teacher name="+this.tname);
    }
}
var t1=new Teacher();
t1.SetData(1008,"patel");
t1.ShowData();