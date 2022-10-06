function zad14(a, b){
    if((a > 2 && a < 11) || (b >= 6 && b < 14)){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}

let a = [1, 0, 6, 10];
let b = [7, 3, 2, 9];

for(let i = 0; i < a.length; i++){
    zad14(a[i], b[i]);
}