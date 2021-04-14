let a=0
let b=1
let i;
let sum=0
for (i=0;i<20;i++){
    sum=a+b
    document.write(sum+ "<br>")
    a=b;
    b=sum;
}
