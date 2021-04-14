let a=1;
let i=0
while (i<100){
    if (a % 3===0 && a % 5===0) {
        document.write("FizzBuzz" + "<br>")
    } if (a%5===0) {
        document.write("Buzz"+"<br>")
    } if (a%3===0) {
    document.write("Fizz" + "<br>")
} else {
        document.write(a+"<br>")
    }
    a++
    i++
}