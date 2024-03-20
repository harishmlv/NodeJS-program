// Create object of derived class and call methods of class A and B

class college
{
    constructor()
    {
        this.ccode;
        this.cname;
    }
    setCollegeData(ccode,cname)
    {
        this.ccode = ccode;
        this.cname = cname;
    }
    showCollegeData()
    {
        console.log("College Code = "+this.ccode);
        console.log("College Name = "+this.cname);
    }
}
class Faculty extends college  // B extends A
{
    constructor()
    {
        super(); // Super function used to invoke base class constructor in derived class constructor.
        this.fid;
        this.fname;
        this.fsal;
    }
    setFactData(fid,fname,fsal)
    {
        this.fid = fid;
        this.fname = fname;
        this.fsal = fsal;
    }
    showFactData()
    {
        console.log("Faculty ID = "+this.fid);
        console.log("Faculty Name = "+this.fname);
        console.log("Faculty Salary = "+this.fsal);
    }
}

var f1 = new Faculty();
f1.setCollegeData(101,"IPS Academy,Indore");
f1.setFactData(2001,"Amit Jain",50000);
f1.showCollegeData();
f1.showFactData();