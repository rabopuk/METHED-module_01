'use strict';
// Необходимо написать функцию, которая принимает 2 параметра n и m
// И возвращает массив с високосными годами в диапазоне между n и m
// Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

{
	const leapYears = (m, n) => {
		let x = Math.min(m, n),
			y = Math.max(m, n);

		const arr = [];

		for (x; x <= y; x++) {
			if (((x % 4 === 0) && (x % 100 !== 0)) || (x % 400 === 0)) {
				arr.push(x);
			}
		}

		return arr;
	};

	let from = -1691,
		upto = -1748;

	console.log('task_04 leapYears: ', leapYears(from, upto));

	from = 2115,
		upto = 1991;

	console.log('task_04 leapYears: ', leapYears(from, upto));
};