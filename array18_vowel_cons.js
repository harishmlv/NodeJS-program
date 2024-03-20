// print vowels and Consonants

var list = ["amit","sumit"];
for(i=0;i<list.length;i++)
{
    var temp = list[i];
    var s = " ";
    var k = " ";
    for(j=0;j<temp.length;i++)
    {
        if(temp[j]!='a' && temp[j]!='e' && temp[j]!='i' && temp[j]!='o' && temp[j]!='u')
        {
            s=s+" "+temp[j];
        }
        if(temp[j]=='a' || temp[j]=='e' || temp[j]=='i' || temp[j]=='o' || temp[j]=='u')
        {
            k=k+" "+temp[j];
        }
    }
}
console.log("Name = "+temp+"Vowels = "+k+"Consonant = "+s);