// coount vowels in each name of  list.
var list=["divyanshu","sandeep","vikash","shubham","swapnil","kuldeep","pradeep","pawan","lakhan","harish"];
var i,j,c=0;
for(i=0;i<list.length;i++)
{
    str=list[i];
    c=0;
    for(j=0;j<str.length;j++)
    {
       if(str[j]=='a' || str[j]=='e' || str[j]=='i' || str[j]=='o' || str[j]=='u')
       {
            c=c+1;
       }
    }
    console.log(list[i]+" = "+c);
}
