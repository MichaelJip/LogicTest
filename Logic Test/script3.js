var jumlahUang = 1475250;
var digits = [];
var count = 0;

while(jumlahUang > 0){
    var mod = jumlahUang % 10;
    digits.push(mod * Math.pow(10, count))

    jumlahUang = Math.floor(jumlahUang / 10);
    count++;
}

digits.reverse();
console.log(digits);