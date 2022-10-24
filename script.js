const buttonSoft = document.querySelector('#btn-soft');
const buttonMedium = document.querySelector('#btn-medium');
const buttonHard = document.querySelector('#btn-hard');

const countdown = document.querySelector('#countdown');

let timerId = null;
let amountTime = null;

buttonSoft.addEventListener('click', function () {
    process('soft')
});

buttonMedium.addEventListener('click', function () {
    process('medium')
});

buttonHard.addEventListener('click', function () {
    process('hard')
});

function process(btn) {
    if (timerId != null) {
        timerId = stopTimer();
    }

    changeBtnCapture(btn);

    let time;
    switch (btn) {
        case 'soft': time = 3; break;
        case 'medium': time = 5; break;
        case 'hard': time = 9; break;
        default: alert( "Нет таких значений");
    }

    amountTime = time * 60;

	calcilateTimer();
    
	timerId = setInterval(calcilateTimer, 1000);
}

function changeBtnCapture(btn) {
    document.querySelector('#medium').style.display = btn == 'medium' ? 'block' : 'none' ;
	document.querySelector('#soft').style.display = btn == 'soft' ? 'block' : 'none' ;
	document.querySelector('#hard').style.display = btn == 'hard' ? 'block' : 'none' ;
}

function calcilateTimer() {
    if(amountTime <= 0){
        stopTimer();
    }
    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;
}

function stopTimer() {
    clearInterval(timerId);
}