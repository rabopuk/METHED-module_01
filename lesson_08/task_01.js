'use strict';
// Напишите функцию генератор  массива случайных чисел
// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;

{
	const generateRandomNumbers = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);

		const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

		return randomNum;
	};

	const generateMassive = (count, m, n) => {
		const arr = [];

		for (let i = 0; i < count; i++) {
			arr.push(generateRandomNumbers(1, 100));
		}

		return arr;
	};

	let n = 5;
	console.log('task_01 generateMassive: ', generateMassive(n));

	n = 42;
	console.log('task_01 generateMassive: ', generateMassive(n));
};