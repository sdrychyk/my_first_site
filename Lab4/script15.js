function zad15(a){
    switch(a){
        case '1':
        var result = 'Зима';
        break;

        case '2':
        var result = 'Весна';
        break;

        case '3':
        var result = 'Літо';
        break;

        case '4':
        var result = 'Осінь';
        break;

        default:
        var result = 'Введіть значення 1-4!';
        break;
    }
    return result;
}

let a = ['3', '0', '2', '4', '1']

for(let i = 0; i < a.length; i++){
    console.log(zad15(a[i]));
}
