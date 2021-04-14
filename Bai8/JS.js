function Play() {
    let K = +prompt("Nhap so tu ban phim")
    let computer = Math.floor(Math.random() * K)
    let limit = 3
    let i ;
    for (i = 0; i < limit; i++) {
        let a = +prompt('Nhap so nguoi dung doan')
        if (computer === a) {
            alert("Ban da thang")
            break;
        } else {
            alert("Doan sai roi")
            if (i >= limit) {
                alert("Ban da het luot choi")
                break;
            }

        }
    }
}






    console.log(computer)

