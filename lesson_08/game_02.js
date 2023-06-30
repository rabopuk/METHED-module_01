'use strict';
// Усовершенствуйте игру, которую написали в game01
// бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
// бот запоминает каждое число которое ввел пользователь и записывает в массив
// бот отграничивает количество попыток до 30 % от количества цифр в диапазоне
// если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
// если диапазон от 50 до 100, то попыток бот даёт 15
// если попытки закончились игра прекращается

{
	// Генерирую случайное число
	const generateRandomNumbers = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);

		const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

		return randomNum;
	};


	// Проверка, что пользователь ввёл число
	const isNumber = (str) => {
		if (Number.isFinite(+str) && !Number.isNaN(+str)) {
			return str;
		} else {
			alert('Введи число!');
			str = isNumber(prompt('Какое число?'));
		}

		return str;
	};


	// Проверяю наличие ответа в массиве
	const checkAttempts = (arr, str) => {
		if (arr.includes(str)) {
			alert('Это число уже было) Попытка не засчитывается, попробуй снова');
			str = isNumber(prompt('Твоё предположение?'));
		} else {
			arr.push(str);
		}

		return str;
	};


	// Бот
	const bot = () => {
		alert('Игра: отгадай число в диапазоне двух чисел');

		const attemptsArr = [],
			firstNum = isNumber(prompt('Введи первое число диапазона')),
			secondNum = isNumber(prompt('Введи второе число диапазона'));

		if ((firstNum === null || firstNum === '') || (secondNum === null || secondNum === '')) {
			alert('Конец игры(((');
			return;
		}

		const min = Math.min(firstNum, secondNum),
			max = Math.max(firstNum, secondNum),
			attempts = Math.round((max - min) * .3);

		const randomNum = generateRandomNumbers(min, max);
		console.log('randomNum: ', randomNum);

		alert(`Тебе нужно отгадать число в диапазоне ${min}-${max})) Число твоих попыток: ${attempts}))`);

		let res = checkAttempts(attemptsArr, isNumber(prompt('Твоё предположение?')));
		console.log('attemptsArr: ', attemptsArr);


		// Игра
		while (+res !== randomNum) {
			// Отмена игры
			if (res === null || res === '' || res === 0) {
				alert('Конец игры(((');
				return;
			}

			if (+res < randomNum) {
				alert('Загаданное число больше');

				res = checkAttempts(attemptsArr, isNumber(prompt('Твоё предположение?')));
				console.log('attemptsArr: ', attemptsArr);
			}

			if (+res > randomNum) {
				alert('Загаданное число меньше');

				res = checkAttempts(attemptsArr, isNumber(prompt('Твоё предположение?')));
				console.log('attemptsArr: ', attemptsArr);

			}

			if (+res === randomNum) {
				alert(`Ты угадал(а)!!! Загаданное число было ${randomNum}! ПОЗДРАВЛЯЮ)))`);

				return;
			};

			if (attemptsArr.length >= attempts) {
				alert('У тебя кончились попытки(( Ты проиграл((((((');
				return;
			}
		}

		return;
	};

	setTimeout(() => {
		bot();
	}, 3000);
};