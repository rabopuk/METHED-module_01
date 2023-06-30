'use strict';
// Продолжаем работать с предыдущей функцией
// Функция принимает еще два параметра n и m
// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
// m и n включительно
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

{
	const generateRandomNumbers = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);

		const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

		return randomNum;
	};

	const generateMassive = (count, m, n) => {
		const arr = [],
			x = Math.min(m, n),
			y = Math.max(m, n);

		for (let i = 0; i < count; i++) {
			arr.push(generateRandomNumbers(x, y));
		}

		return arr;
	};

	let count = 5,
		m = -5,
		n = 25;

	console.log('task_02 generateMassive: ', generateMassive(count, m, n));

	count = 42,
		m = 25,
		n = -5;

	console.log('task_02 generateMassive: ', generateMassive(count, m, n));
};