'use strict';
// Напишите функцию getAveragePriceGoods
// для получения средней цены товара
// Дан многомерный  массив
// В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
// Необходимо посчитать среднюю стоимость одного товара в магазине.

{
	const allCashbox = [
		[12, 4500],
		[7, 3210],
		[4, 650],
		[3, 1250],
		[9, 7830],
		[1, 990],
		[6, 13900],
		[1, 370]
	];

	const getAveragePriceGoods = ([...arr]) => {
		let sum = 0;

		for (let el of arr) {
			let price = el[1] / el[0];
			// console.log('price: ', price);
			sum += price
			// console.log('sum: ', sum);
		};

		const averagePrice = Math.round(sum / arr.length);

		return averagePrice;
	};

	console.log('getAveragePriceGoods: ', getAveragePriceGoods(allCashbox));
};
