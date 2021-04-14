let a=0;

let b=1;

let r=0;
let sum=1;
document.write(a+"<br>" +b +"<br>")
for (let i=2;i<20;i++) {
    r = a + b;
    document.write(r + "<br>")
       sum=sum+r
        a = b;
        b = r;


        //document.write(r + "<br>")
    //

}document.write( sum);
 // } for (i=0;i<3;i++){
// sum=sum+r
// } document.write(sum)





