function add2(...a)
{
    var i,s=0;
    for(i=0;i<a.length;i++)
    {
        console.log(a[i]);
        s=s+a[i];
    }
    console.log("sum is="+s);
}
add2(5);
add2(45,8);
add2();
add2(2,56,89,2,34);