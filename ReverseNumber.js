var n = 1234
var sum = 0 

while(n>0)
{
    sum = sum*10+n%10 // 0 + 1234%10 1234%10 = 123%10 12%10 = 2
    n= Math.floor(n/10)
    
}
console.log(sum)