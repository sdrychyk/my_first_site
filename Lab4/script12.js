function zad12(a){
    if(a == 0 || a == 2){
        console.log(a+7);
    }
    else{
        console.log(a/10);
    }
}

let a = [5, 0, -3, 2];

for(let i = 0; i < a.length; i++){
    zad12(a[i]);
}