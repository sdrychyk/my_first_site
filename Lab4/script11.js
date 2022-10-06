function zad11(a){
    if(a > 0 && a < 5){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}

let a = [5, 0, -3, 2];

for(let i = 0; i < a.length; i++){
    zad11(a[i]);
}