// Arrange Array data in Ascending Order ( it can be done with SORT Function)

var a = [1,6,2,7,3,8,4,9,5,10];
var i,j,temp;

for(i=0;i<a.length;i++)
{
    for(j=0;j<a.length;j++)
    {
        if(a[i]>a[j+1])
        {
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
        }
    }
}

console.log("Array data Sorted in Ascending Order: ")
for(i=0;i<10;i++)
{
    console.log(a[i]);
}