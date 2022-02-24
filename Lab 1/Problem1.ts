let payment:number = 0
let incriment:number = .01
for(let i=0; i<30; i++){
    payment += incriment;
    incriment *= 2;
    console.log(payment)
}

console.log(payment);