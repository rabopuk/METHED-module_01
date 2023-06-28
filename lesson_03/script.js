'use strict';

{
	const productName = 'keyboard', // Наименование товара
		productCategory = 'input devices', // Категория товара
		quantityOfGoods = 42, // Количество товара
		productPrice = 300, // Цена товара в $
		totalAmount = (quantityOfGoods * productPrice); // Общая сумма товара

	// console.log('productName: ', productName);
	// console.log('totalAmount: ', `${totalAmount}$`);
};

{
	const productName = 'mouse',
		productCategory = 'input devices',
		quantityOfGoods = 23,
		productPrice = 225;
};

{
	setTimeout(() => {
		const productName = prompt('Наименование товара?', null),
			productCategory = prompt('Категория товара?', null),
			quantityOfGoods = +prompt('Количество товара (шт)?', 0),
			productPrice = +prompt('Цена товара ($)?', 0);

		console.log(('productName: ').padEnd(18, ' '), productName, ' // ', 'typeof: ', typeof productName);
		console.log(('productCategory: ').padEnd(18, ' '), productCategory, ' // ', 'typeof: ', typeof productCategory);
		console.log(('quantityOfGoods: ').padEnd(18, ' '), quantityOfGoods, ' // ', 'typeof: ', typeof quantityOfGoods);
		console.log(('productPrice: ').padEnd(18, ' '), productPrice, ' // ', 'typeof: ', typeof productPrice);

		const infoStr = `На складе ${quantityOfGoods} единицы товара "${productName}" на сумму ${quantityOfGoods * productPrice}$`;

		console.log(('infoStr: ').padEnd(18, ' '), infoStr);
	}, 3000);
};
