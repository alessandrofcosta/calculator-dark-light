let total = '';
maxLength = 20
const showCalc = document.querySelector('.js-show-calc');


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


document.addEventListener('keydown', function(event) {
    const keyPressed = event.key;

    if (/[0-9+\-×/.\*]/.test(keyPressed)) {
        updateCalculator(keyPressed.replace('*', '×'));
    } else if (keyPressed === 'Enter') {
        equal();
    } else if (keyPressed === 'Backspace' || keyPressed === 'Escape') {
        limpar();
    }
});


function updateCalculator(update) {
    console.log(total.length);
    if (total.length < maxLength || !total.length) {
        if (showCalc.classList.contains('display-0')) {
            if (update === '+' || update === '-' || update === '/' || update === '×') {
                total += update;
                document.querySelector('.js-show-calc').innerHTML = total;
                localStorage.setItem('total', total);
                showCalc.classList.remove('display-0');
            } else {
                total = '';
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

}

function equal() {
    total = total.replaceAll("×", "*");
    try {
        total = eval(total);
    } catch (e) {
        total = 'Erro';
    }

    showCalc.classList.add('display-0');

    showCalc.innerHTML = total;
    localStorage.setItem('total', total);
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
