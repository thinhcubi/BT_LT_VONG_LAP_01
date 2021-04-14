let a=0;
let b=1;
let sum=0;
let i ;
for (i=0;i<5;i++){
    sum=a+b;
    document.write(sum)
    if (sum % 5 ===0){
        alert(sum)
        break;
    } a=b;
      b=sum;

}