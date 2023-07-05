'use strict';
// Обнаружена уязвимость в нашем функционале
// Если после добавления последнего товара присвоить к totalPrice любое значение,
// например:
// cart.totalPrice = 10;
// то при выводе print() общая стоимость корзины будет равна 10
// Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером который будет возвращать результат вызова метода calculateItemPrice
// метод getTotalPrice больше не нужен
// calculateItemPrice переделать таким образом, чтобы сумму он возвращал, а не записывал в свойство totalPrice
// Вызов метода calculateItemPrice оставить только у геттера totalPrice

{
	const cart = {
		items: [], // товары
		count: 0, // количество товаров

		add(name, price, count = 1) { // добавить товар
			const newItemObj = {};

			newItemObj.name = name;
			newItemObj.price = price;
			newItemObj.count = count;
			newItemObj.totalPrice = newItemObj.price * newItemObj.count; // * без введения этого свойства мне было трудно догадаться как решить задание

			this.items.push(newItemObj);

			this.calculateItemPrice();
			this.increaseCount(count);
		},

		increaseCount(n) { // увеличить количество товаров
			this.count += n;
		},

		calculateItemPrice() { // посчитать общую стоимость товаров
			return this.items.reduce((sum, item) => sum += item.totalPrice, 0);
		},

		get totalPrice() { // общая стоимость корзины
			return this.calculateItemPrice();
		},

		clear() { // очистить корзину
			this.items = [];
			this.totalPrice = 0;
			this.count = 0;
		},

		print() { // распечатать корзину
			console.log(JSON.stringify(this.items));
			console.log(this.totalPrice);
		},
	};

	cart.add('мышь', 1300);
	cart.add('клавиатура', 2600, 2);
	cart.add('наушники', 2000, 5);

	cart.print();
};