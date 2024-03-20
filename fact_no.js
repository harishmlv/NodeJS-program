function fact(n){
var i,f=1;
for(i=1;i<=n;i++)
{
    f=f*i;

}
return(f)
}
var k=fact(5)
console.log("factorial="+k);