let total = '';
const showCalc = document.querySelector('.js-show-calc');

console.log(localStorage.getItem('mode'))

if (localStorage.getItem('mode')) {
    document.querySelector('.js-mode').innerHTML = localStorage.getItem('mode')
    if (localStorage.getItem('mode') === '<img src="midia/white-simbol.png" alt="white-mode">') {
        document.body.classList.toggle("light-mode");
    }
}

total = localStorage.getItem('total') || '';
if (total) {
    document.querySelector('.js-show-calc').innerHTML = total
}

function updateCalculator(update) {

    if (showCalc.classList.contains('display-0')) {
        if (update === ' + ' || update === ' - ' || update === ' / ' || update === ' × ') {
            total += update;
            document.querySelector('.js-show-calc').innerHTML = total;
            localStorage.setItem('total', total);
            showCalc.classList.remove('display-0');
        } else {
            total = ''
            total += update;
            document.querySelector('.js-show-calc').innerHTML = total;
            localStorage.setItem('total', total);
            showCalc.classList.remove('display-0');
        }
    } else {
        total += update;
        document.querySelector('.js-show-calc').innerHTML = total;
        localStorage.setItem('total', total);
    }


}

function equal() {
    total = total.replaceAll("×", "*");
    total = eval(total);

    showCalc.classList.add('display-0');

    showCalc.innerHTML = total;
}

function limpar() {
    total = '0';
    document.querySelector('.js-show-calc').innerHTML = total;
    total = '';
    localStorage.setItem('total', total);
}

function toggleLight(classe) {
    element = document.querySelector(classe);
    document.body.classList.toggle("light-mode");

    if (element.innerHTML === '<img src="midia/white-simbol.png" alt="white-mode">') {
        element.innerHTML = '<img src="midia/dark-simbol.png" alt="dark-mode">'
        localStorage.setItem('mode', '<img src="midia/dark-simbol.png" alt="dark-mode">')
    } else {
        element.innerHTML = '<img src="midia/white-simbol.png" alt="white-mode">'
        localStorage.setItem('mode', '<img src="midia/white-simbol.png" alt="white-mode">')
    }
}