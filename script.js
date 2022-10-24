const buttonSoft = document.querySelector('#btn-soft');
const buttonMedium = document.querySelector('#btn-medium');
const buttonHard = document.querySelector('#btn-hard');

const countdown = document.querySelector('#countdown');

buttonSoft.addEventListener('click', function () {
	document.querySelector('#medium').style.display = 'none';
	document.querySelector('#soft').style.display = 'block';
	document.querySelector('#hard').style.display = 'none';

	const timer = 3;
	let amountTime = timer * 60;

	function calcilateTimerSoft() {
		let minutes = Math.floor(amountTime / 60);
		let seconds = amountTime % 60;

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		countdown.textContent = `${minutes} : ${seconds}`;
		amountTime--;

		if (amountTime < 0) {
			stopTimer();
			amountTime = 0;
		}

		if (
			(document.querySelector('#btn-medium').onclick = function () {
				stopTimer();
			})
		)
			if (
				(document.querySelector('#btn-hard').onclick = function () {
					stopTimer();
				})
			)
				function stopTimer() {
					clearInterval(timerId);
				}
	}

	let timerId = setInterval(calcilateTimerSoft, 1000);
});

buttonMedium.addEventListener('click', function () {
	document.querySelector('#medium').style.display = 'block';
	document.querySelector('#soft').style.display = 'none';
	document.querySelector('#hard').style.display = 'none';

	const timer = 5;
	let amountTime = timer * 60;

	function calcilateTimerMedium() {
		let minutes = Math.floor(amountTime / 60);
		let seconds = amountTime % 60;

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		countdown.textContent = `${minutes} : ${seconds}`;
		amountTime--;

		if (amountTime < 0) {
			stopTimer();
			amountTime = 0;
		}

		if (
			(document.querySelector('#btn-soft').onclick = function () {
				stopTimer();
			})
		)
			if (
				(document.querySelector('#btn-hard').onclick = function () {
					stopTimer();
				})
			)
				function stopTimer() {
					clearInterval(timerId);
				}
	}

	let timerId = setInterval(calcilateTimerMedium, 1000);
});

buttonHard.addEventListener('click', function () {
	document.querySelector('#medium').style.display = 'block';
	document.querySelector('#soft').style.display = 'none';
	document.querySelector('#hard').style.display = 'none';

	const timer = 9;
	let amountTime = timer * 60;

	function calcilateTimerHard() {
		let minutes = Math.floor(amountTime / 60);
		let seconds = amountTime % 60;

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		countdown.textContent = `${minutes} : ${seconds}`;
		amountTime--;

		if (amountTime < 0) {
			stopTimer();
			amountTime = 0;
		}

		if (
			(document.querySelector('#btn-soft').onclick = function () {
				stopTimer();
			})
		)
			if (
				(document.querySelector('#btn-medium').onclick = function () {
					stopTimer();
				})
			)
				function stopTimer() {
					clearInterval(timerId);
				}
	}

	let timerId = setInterval(calcilateTimerHard, 1000);
});
