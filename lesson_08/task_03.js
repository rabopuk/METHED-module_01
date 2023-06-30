'use strict';
// Продолжаем работать с предыдущей функцией
// Добавьте 4 - ый опциональный параметр у функции
// 4 - ый опциональный параметр это строка:
// если функция получает 'even', то функция возвращает массив чётных чисел
// если функция получает 'odd', то функция возвращает массив нечётных чисел

{
	const generateRandomNumbers = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);

		const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

		return randomNum;
	};

	const generateEvenNumbers = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);

		const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

		return randomNum + randomNum % 2;
	};

	const generateOddNumbers = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);

		const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

		return randomNum + ((randomNum % 2) - 1);
	};

	const generateMassive = (count, m, n, str) => {
		const arr = [],
			x = Math.min(m, n),
			y = Math.max(m, n);

		if (str === 'even') {
			for (let i = 0; i < count; i++) {
				arr.push(generateEvenNumbers(x + 1, y - 1));
			}
		} else if (str === 'odd') {
			for (let i = 0; i < count; i++) {
				arr.push(generateOddNumbers(x + 1, y + 1));
			}
		} else {
			for (let i = 0; i < count; i++) {
				arr.push(generateRandomNumbers(x, y));
			}
		}

		return arr;
	};

	let count = 5,
		m = -5,
		n = 25,
		str = 'even';

	console.log('task_03 even generateMassive: ', generateMassive(count, m, n, str));

	count = 42,
		m = 25,
		n = -5,
		str = 'odd';

	console.log('task_03 odd generateMassive: ', generateMassive(count, m, n, str));
};