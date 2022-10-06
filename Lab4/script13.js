function zad13(a, b){
    if(a <= 1 && b >= 3){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}

let a = [1, 0, 3];
let b = [3, 6, 5];

for(let i = 0; i < a.length; i++){
    zad13(a[i], b[i]);
}