var jumlahUang = 1470250;

//Variable a
var mod = jumlahUang % 100000;
var a = (jumlahUang - mod) / 100000;
jumlahUang = jumlahUang - (a * 100000);

//Variable b
var mod = jumlahUang % 50000;
var b = (jumlahUang - mod) / 50000;
jumlahUang = jumlahUang - (b * 50000);


//Variable c
var mod = jumlahUang % 20000;
var c = (jumlahUang - mod) / 20000;
jumlahUang = jumlahUang - (c * 20000);

//Variabe D
var mod = jumlahUang % 5000;
var d = (jumlahUang - mod) / 5000;
jumlahUang = jumlahUang - (d * 5000);

//Variable e
var mod = jumlahUang % 100;
var e = (jumlahUang - mod) / 100;
jumlahUang = jumlahUang - (e * 100);

//Variable f
var mod = jumlahUang % 50;
var f = (jumlahUang - mod) / 50;
jumlahUang = jumlahUang - (f * 50);


//Output dalam bentuk console
console.log("Rp. 100.000: " + a);
console.log("Rp. 50.000: " + b);
console.log("Rp. 20.000: " + c);
console.log("Rp. 5.000: "+ d);
console.log("Rp. 100: "+e);
console.log("Rp. 50: "+f);