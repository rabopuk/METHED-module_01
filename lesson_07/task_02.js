'use strict';
// Напишите функцию getAverageValue
// для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа
// С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:
// const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

{
	const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

	const getAverageValue = ([...arr]) => Math.floor(arr.reduce((sum, current) => sum + current, 0) / arr.length);

	console.log('getAverageValue: ', getAverageValue(allCashbox));
};