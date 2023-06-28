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

		// ? А почему не срабатывает такой вариант проверки?
		// ! if (typeof quantityOfGoods === 'number' && quantityOfGoods !== NaN) {}

		if (Number.isFinite(quantityOfGoods) && !Number.isNaN(quantityOfGoods)) {
			console.log(('quantityOfGoods: ').padEnd(18, ' '), quantityOfGoods, ' // ', 'typeof: ', typeof quantityOfGoods);
		} else {
			alert('Вы ввели некорректные данные количества товара');
			console.log('Вы ввели некорректные данные количества товара');
		}

		if (Number.isFinite(productPrice) && !Number.isNaN(productPrice)) {
			console.log(('productPrice: ').padEnd(18, ' '), productPrice, ' // ', 'typeof: ', typeof productPrice);
		} else {
			alert('Вы ввели некорректные данные цены товара');
			console.log('Вы ввели некорректные данные цены товара');
		}

		const infoStr = `На складе ${quantityOfGoods} единицы товара "${productName}" на сумму ${quantityOfGoods * productPrice}$`;

		// console.log(('infoStr: ').padEnd(18, ' '), infoStr);
	}, 5000);
};
