var payment = 0;
var incriment = .01;
for (var i = 0; i < 30; i++) {
    payment += incriment;
    incriment *= 2;
    console.log(payment);
}
console.log(payment);
